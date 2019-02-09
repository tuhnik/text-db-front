import React, { Component } from 'react';
import StoryItem from './StoryItem'

let data = [{heading: "Pealkiri...", tags: ["Hello", "Hola", "Random Tag"], description: "Juht tervitab oma kaasaelajaid: “Tere, sõbrad, tuttavad ja koostööpartnerid. Kirjutan Teile, sest inimesed on natuke mures, mis minuga toimub. Annan teada, et minuga on üldiselt kõik okei, vaid pisemad kahjustused, neist hullemaid suutsin ennetada. Ma luban, et kirjutan peagi ka täpsemalt, mis maratonil toimus. See võistlus on minutite mäng, kus valikuks võib osutuda jätkata või mõnest jäsemest ilma jääda. Seega ei saa ma jätta lahti seletamata, mis see olukord tegelikult tähendab. Muidu võib mõne jaoks see esmapilgul tunduda kui tore jalutuskäik?"},
{heading: "Uus lugu!!!", tags: ["Yes", "Hola", "Random Tag"], description: "Yukon Arctic Ultra eelmise aasta rekordiomanik Casper Wakefield toob Juhti osalemise välja kui kangelasteo. “Tean, et praegu emotsioonid keevad ja võid olla olukorra peale vihane. Ometi oled Sa kangelane ja väga unikaalne sportlane! Koos saame taastumise järel teekonnale tagasi vaadata ja hea analüüsi teha,” kirjutas ta Juhtile."}
]



class StoryList extends Component {
  render() {
    return (<>
        {data.map((el, i)=>{
            return <StoryItem heading={el.heading} tags={el.tags} description={el.description}/>
        })}
        </>
    );
  }
}

export default StoryList;
