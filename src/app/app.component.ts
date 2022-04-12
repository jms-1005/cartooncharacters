import { Component } from '@angular/core';

interface Character{
  id:string;
  name:string;
  movie:string;
  description:string;
  img:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cartooncharacters';
  showItem(){
    return true;
  }

  cartoonChars:Character[] = [
    {
      id: "char1",
      name: "Elliot",
      movie: "Open Season",
      description: "Elliot is the deuteragonist of the Open Season franchise. He is Boog's best friend, Giselle's husband, Gisela, Giselita, and Elvis' father, and Ursa's adoptive brother-in-law.",
      img: 'https://static.wikia.nocookie.net/openseason/images/2/2d/Open_Season_3_Elliot.png'
    },
    {
      id: "char2",
      name: "Private",
      movie: "Penguins of Madagascar",
      description: "Private is a major character of Madagascar, a supporting character in Madagascar: Escape 2 Africa, the central protagonist of The Penguins of Madagascar, a supporting character in Madagascar 3: Europe's Most Wanted, and the main protagonist of Penguins of Madagascar: The Movie. Despite his inexperience, he is occasionally the only penguin able to resolve the main issue (episode) in the series. He is able to reach an end that has both parties in a 'win-win' situation (giving Barry a hug and making the rest of the Zoo forget the penguin's spying on them, even his own team).",
      img: 'https://static.wikia.nocookie.net/penguinsofmadagascar/images/7/70/PrivateNew.png'

    },
    {
      id: "char3",
      name: "Venellope",
      movie: "Wrech-it-Ralph",
      description: "Vanellope von Schweetz is the deuteragonist of Disney's 2012 animated feature film, Wreck-It Ralph and its 2018 sequel. She is a young, sharp-tongued racer that originates from the candy-themed racing game, Sugar Rush. Due to being a \"glitch\", Vanellope was forbidden to race by order of King Candy. She was nevertheless determined to become a real racer and sought to accomplish her goal by teaming up with a fellow misfit, Wreck-It Ralph",
      img: 'https://static.wikia.nocookie.net/disney/images/2/25/Profile_-_Vanellope_Von_schweetz.jpeg'

    }
  ]

}
