import React, { useState } from "react";

const App = () => {
  const [buttonText, setButtonText] = useState("TO A");

  const sitesList = [
    "https://sliding.toys/mystic-square/8-puzzle/daily/",
    "https://longdogechallenge.com/",
    "https://maze.toys/mazes/mini/daily/",
    "https://optical.toys",
    "https://paint.toys/calligram/",
    "https://puginarug.com",
    "https://memory.toys/classic/easy/",
    "https://alwaysjudgeabookbyitscover.com",
    "https://clicking.toys/flip-grid/neat-nine/3-holes/",
    "https://weirdorconfusing.com/",
    "https://checkbox.toys/scale/",
    "https://binarypiano.com/",
    "https://mondrianandme.com/",
    "https://onesquareminesweeper.com/",
    "https://cursoreffects.com",
    "http://floatingqrcode.com/",
    "https://thatsthefinger.com/",
    "https://cant-not-tweet-this.com/",
    "http://heeeeeeeey.com/",
    "http://corndog.io/",
    "http://eelslap.com/",
    "http://www.staggeringbeauty.com/",
    "http://burymewithmymoney.com/",
    "https://smashthewalls.com/",
    "https://jacksonpollock.org/",
    "http://endless.horse/",
    "http://drawing.garden/",
    "https://www.trypap.com/",
    "http://www.republiquedesmangues.fr/",
    "http://www.movenowthinklater.com/",
    "https://sliding.toys/mystic-square/15-puzzle/daily/",
    "https://paint.toys/",
    "https://checkboxrace.com/",
    "http://www.rrrgggbbb.com/",
    "http://www.koalastothemax.com/",
    "https://rotatingsandwiches.com/",
    "http://www.everydayim.com/",
    "http://randomcolour.com/",
    "http://maninthedark.com/",
    "http://cat-bounce.com/",
    "http://chrismckenzie.com/",
    "https://thezen.zone/",
    "http://ninjaflex.com/",
    "http://ihasabucket.com/",
    "https://toms.toys",
    "http://corndogoncorndog.com/",
    "http://www.hackertyper.com/",
    "https://pointerpointer.com",
    "http://imaninja.com/",
    "http://www.partridgegetslucky.com/",
    "http://www.ismycomputeron.com/",
    "http://www.nullingthevoid.com/",
    "http://www.muchbetterthanthis.com/",
    "http://www.yesnoif.com/",
    "http://lacquerlacquer.com",
    "https://clicking.toys/peg-solitaire/solid/",
    "http://potatoortomato.com/",
    "http://iamawesome.com/",
    "https://strobe.cool/",
    "http://thisisnotajumpscare.com/",
    "http://doughnutkitten.com/",
    "http://crouton.net/",
    "http://corgiorgy.com/",
    "http://www.wutdafuk.com/",
    "http://unicodesnowmanforyou.com/",
    "http://chillestmonkey.com/",
    "http://scroll-o-meter.club/",
    "http://www.crossdivisions.com/",
    "http://tencents.info/",
    "https://memory.toys/maze/easy/",
    "https://boringboringboring.com/",
    "http://www.patience-is-a-virtue.org/",
    "http://pixelsfighting.com/",
    "http://isitwhite.com/",
    "https://existentialcrisis.com/",
    "http://onemillionlols.com/",
    "http://www.omfgdogs.com/",
    "http://oct82.com/",
    "http://chihuahuaspin.com/",
    "http://www.blankwindows.com/",
    "http://tunnelsnakes.com/",
    "http://www.trashloop.com/",
    "http://spaceis.cool/",
    "http://www.doublepressure.com/",
    "http://www.donothingfor2minutes.com/",
    "http://buildshruggie.com/",
    "https://optical.toys/thatcher-effect/",
    "http://yeahlemons.com/",
    "http://wowenwilsonquiz.com",
    "http://notdayoftheweek.com/",
    "https://number.toys/",
    "https://card.toys",
    "http://www.amialright.com/",
    "https://greatbignothing.com/",
    "https://zoomquilt.org/",
    "https://optical.toys/troxler-fade/",
    "https://dadlaughbutton.com/",
    "https://remoji.com/",
    "http://papertoilet.com/",
    "https://loopedforinfinity.com/",
    "https://www.ripefordebate.com/",
    "https://end.city/",
    "https://elonjump.com/",
    "https://www.bouncingdvdlogo.com/",
    "https://toybox.toms.toys",
    "https://memory.toys/monkey-challenge/easy/",
    "https://memory.toys",
  ];

  const handleClick = () => {
    if (buttonText === "TO A") {
      setButtonText("TO ANOTHER");
    }

    const randomSite = sitesList[Math.floor(Math.random() * sitesList.length)];
    window.open(randomSite, "_blank");
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-900 text-white'>
      <div className='text-center'>
        <h1 className='text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500'>
          USELESS WEBSITES
        </h1>
        <button
          onClick={handleClick}
          className='px-8 py-4 text-2xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-lg hover:from-cyan-600 hover:to-blue-700 transition-all transform hover:scale-105 active:scale-95'
        >
          <span className='block'>TAKE ME {buttonText}</span>
          <span className='block text-sm mt-1 opacity-80'>USELESS WEBSITE</span>
        </button>
      </div>
    </div>
  );
};

export default App;
