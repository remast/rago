package main

import (
	"context"
	"fmt"
	"net/http"

	"github.com/hajimehoshi/go-mp3"
	"github.com/hajimehoshi/oto/v2"
)

//

// App struct
type App struct {
	ctx        context.Context
	stationURL string
	volume     float64
	otoCtx     *oto.Context
	player     *oto.Player
}

type Station struct {
	Name string `json:"name"`
	URL  string `json:"url"`
}

var stations []Station

func init() {
	stations = []Station{
		{Name: "delta radio", URL: "http://streams.deltaradio.de/delta-live/mp3-192/mediaplayerdeltaradio"},
	}
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{
		volume:     1,
		stationURL: "http://streams.deltaradio.de/delta-live/mp3-192/mediaplayerdeltaradio",
	}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

func (a *App) GetStations() []Station {
	return stations
}

// Greet returns a greeting for the given name
func (a *App) SetVolume(volume float64) {
	a.volume = volume

	if a.player == nil {
		return
	}

	(*a.player).SetVolume(volume)
}

func (a *App) GetVolume() float64 {
	return a.volume
}

func (a *App) ChangeStation() {
	a.Stop()
	a.stationURL = "http://streams.radiobob.de/bob-live/mp3-192/mediaplayer"
	a.Start()
}

func (a *App) Stop() {
	fmt.Println("Stoppin")

	if a.player == nil {
		return
	}
	(*a.player).Close()
}

func (a *App) Start() {

	fmt.Println("Starting")
	resp, err := http.Get(a.stationURL)
	if err != nil {
		panic("reading my-file.mp3 failed: " + err.Error())
	}

	// Decode file
	decodedMp3, err := mp3.NewDecoder(resp.Body)
	if err != nil {
		panic("mp3.NewDecoder failed: " + err.Error())
	}

	if a.otoCtx == nil {
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
		a.otoCtx = otoCtx

		if err != nil {
			panic("oto.NewContext failed: " + err.Error())
		}

		// It might take a bit for the hardware audio devices to be ready, so we wait on the channel.
		<-readyChan
	}

	player := a.otoCtx.NewPlayer(decodedMp3)
	a.player = &player

	player.SetVolume(a.volume)

	player.Play()
}
