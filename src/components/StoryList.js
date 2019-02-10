import React, { Component } from 'react';
import StoryItem from './StoryItem'

let data = [{id: 685587, heading: "Pealkiri...", summary: "See on lugu Juhist ja tema kaasaelajatest", tags: ["Hello", "Hola", "Random Tag"], description: "Juht tervitab oma kaasaelajaid: “Tere, sõbrad, tuttavad ja koostööpartnerid. Kirjutan Teile, sest inimesed on natuke mures, mis minuga toimub. Annan teada, et minuga on üldiselt kõik okei, vaid pisemad kahjustused, neist hullemaid suutsin ennetada. Ma luban, et kirjutan peagi ka täpsemalt, mis maratonil toimus. See võistlus on minutite mäng, kus valikuks võib osutuda jätkata või mõnest jäsemest ilma jääda. Seega ei saa ma jätta lahti seletamata, mis see olukord tegelikult tähendab. Muidu võib mõne jaoks see esmapilgul tunduda kui tore jalutuskäik?", date: "09.02.2019", views: 13},
{id: 685587, heading: "Uus lugu!!!", tags: ["Yes", "Hola", "Random Tag"], description: "Yukon Arctic Ultra eelmise aasta rekordiomanik Casper Wakefield toob Juhti osalemise välja kui kangelasteo. “Tean, et praegu emotsioonid keevad ja võid olla olukorra peale vihane. Ometi oled Sa kangelane ja väga unikaalne sportlane! Koos saame taastumise järel teekonnale tagasi vaadata ja hea analüüsi teha,” kirjutas ta Juhtile.", date: "09.02.2019", views: 33},
{id: 685587, heading: "Pealkiri...", summary: "Random kirjeldus", tags: ["Hello", "Hola", "Random Tag"], description: "Juht tervitab oma kaasaelajaid: “Tere, sõbrad, tuttavad ja koostööpartnerid. Kirjutan Teile, sest inimesed on natuke mures, mis minuga toimub. Annan teada, et minuga on üldiselt kõik okei, vaid pisemad kahjustused, neist hullemaid suutsin ennetada. Ma luban, et kirjutan peagi ka täpsemalt, mis maratonil toimus. See võistlus on minutite mäng, kus valikuks võib osutuda jätkata või mõnest jäsemest ilma jääda. Seega ei saa ma jätta lahti seletamata, mis see olukord tegelikult tähendab. Muidu võib mõne jaoks see esmapilgul tunduda kui tore jalutuskäik?", date: "09.02.2019", views: 13},
{id: 685587, heading: "Uus lugu!!!", tags: ["Yes", "Hola", "Random Tag"], description: "Yukon Arctic Ultra eelmise aasta rekordiomanik Casper Wakefield toob Juhti osalemise välja kui kangelasteo. “Tean, et praegu emotsioonid keevad ja võid olla olukorra peale vihane. Ometi oled Sa kangelane ja väga unikaalne sportlane! Koos saame taastumise järel teekonnale tagasi vaadata ja hea analüüsi teha,” kirjutas ta Juhtile.", date: "09.02.2019", views: 33},
{id: 685587, heading: "Pealkiri...", tags: ["Hello", "Hola", "Random Tag"], description: "Juht tervitab oma kaasaelajaid: “Tere, sõbrad, tuttavad ja koostööpartnerid. Kirjutan Teile, sest inimesed on natuke mures, mis minuga toimub. Annan teada, et minuga on üldiselt kõik okei, vaid pisemad kahjustused, neist hullemaid suutsin ennetada. Ma luban, et kirjutan peagi ka täpsemalt, mis maratonil toimus. See võistlus on minutite mäng, kus valikuks võib osutuda jätkata või mõnest jäsemest ilma jääda. Seega ei saa ma jätta lahti seletamata, mis see olukord tegelikult tähendab. Muidu võib mõne jaoks see esmapilgul tunduda kui tore jalutuskäik?", date: "09.02.2019", views: 13},
{id: 685587, heading: "Uus lugu!!!", tags: ["Yes", "Hola", "Random Tag"], description: "Yukon Arctic Ultra eelmise aasta rekordiomanik Casper Wakefield toob Juhti osalemise välja kui kangelasteo. “Tean, et praegu emotsioonid keevad ja võid olla olukorra peale vihane. Ometi oled Sa kangelane ja väga unikaalne sportlane! Koos saame taastumise järel teekonnale tagasi vaadata ja hea analüüsi teha,” kirjutas ta Juhtile.", date: "09.02.2019", views: 33},
{id: 685587, heading: "Pealkiri...", tags: ["Hello", "Hola", "Random Tag"], description: "Juht tervitab oma kaasaelajaid: “Tere, sõbrad, tuttavad ja koostööpartnerid. Kirjutan Teile, sest inimesed on natuke mures, mis minuga toimub. Annan teada, et minuga on üldiselt kõik okei, vaid pisemad kahjustused, neist hullemaid suutsin ennetada. Ma luban, et kirjutan peagi ka täpsemalt, mis maratonil toimus. See võistlus on minutite mäng, kus valikuks võib osutuda jätkata või mõnest jäsemest ilma jääda. Seega ei saa ma jätta lahti seletamata, mis see olukord tegelikult tähendab. Muidu võib mõne jaoks see esmapilgul tunduda kui tore jalutuskäik?", date: "09.02.2019", views: 13},
{id: 685587, heading: "Uus lugu!!!", tags: ["Yes", "Hola", "Random Tag"], description: "Yukon Arctic Ultra eelmise aasta rekordiomanik Casper Wakefield toob Juhti osalemise välja kui kangelasteo. “Tean, et praegu emotsioonid keevad ja võid olla olukorra peale vihane. Ometi oled Sa kangelane ja väga unikaalne sportlane! Koos saame taastumise järel teekonnale tagasi vaadata ja hea analüüsi teha,” kirjutas ta Juhtile.", date: "09.02.2019", views: 33}
]


class StoryList extends Component {
  desc(el) {
      let txt = el.description.substring(0, 350) + "..."
      return txt
  }
  render() {
    return (<>
        {data.map((el, i)=>{
            return <StoryItem key={i} id={el.id} heading={el.heading} summary={el.summary} tags={el.tags} description={this.desc(el)} date={el.date} views={el.views}/>
        })}
        </>
    );
  }
}

export default StoryList;
