package main

import (
	"context"
	"fmt"
	"net/http"

	"github.com/hajimehoshi/go-mp3"
	"github.com/hajimehoshi/oto/v2"
)

// App struct
type App struct {
	ctx    context.Context
	player *oto.Player
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

// Greet returns a greeting for the given name
func (a *App) Greet(name string) string {
	return fmt.Sprintf("Hello %s, It's show time!", name)
}

func (a *App) Stop() {
	err := (*a.player).Close()
	if err != nil {
		panic("player.Close failed: " + err.Error())
	}
}

func (a *App) Start() {
	resp, err := http.Get("http://streams.deltaradio.de/delta-live/mp3-192/mediaplayerdeltaradio")
	if err != nil {
		panic("reading my-file.mp3 failed: " + err.Error())
	}

	// Decode file
	decodedMp3, err := mp3.NewDecoder(resp.Body)
	if err != nil {
		panic("mp3.NewDecoder failed: " + err.Error())
	}

	// Prepare an Oto context (this will use your default audio device) that will
	// play all our sounds. Its configuration can't be changed later.

	// Usually 44100 or 48000. Other values might cause distortions in Oto
	samplingRate := 44100

	// Number of channels (aka locations) to play sounds from. Either 1 or 2.
	// 1 is mono sound, and 2 is stereo (most speakers are stereo).
	numOfChannels := 2

	// Bytes used by a channel to represent one sample. Either 1 or 2 (usually 2).
	audioBitDepth := 2

	// Remember that you should **not** create more than one context
	otoCtx, readyChan, err := oto.NewContext(samplingRate, numOfChannels, audioBitDepth)

	if err != nil {
		panic("oto.NewContext failed: " + err.Error())
	}
	// It might take a bit for the hardware audio devices to be ready, so we wait on the channel.
	<-readyChan

	// Create a new 'player' that will handle our sound. Paused by default.
	player := otoCtx.NewPlayer(decodedMp3)
	a.player = &player

	// Play starts playing the sound and returns without waiting for it (Play() is async).
	player.Play()

	// We can wait for the sound to finish playing using something like this
	//	for player.IsPlaying() {
	//		time.Sleep(time.Millisecond)
	//	}

	// If you don't want the player/sound anymore simply close

}
