import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';


interface StatusCard {
  id: number;
  title: string;
  description: string;
  // add more properties as needed
}
interface Background {
  color: string;
  image: string;
}
type Backgrounds = {
  [key: number]: { color: string; image: string; };
};


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('cardContainer') cardContainerRef!: ElementRef<HTMLDivElement>;
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;
  cards:StatusCard[] = [];
  private intervalId: any;

   backgrounds: Backgrounds = {
    1: {
      color: 'linear-gradient(to bottom right, #ff6666, #ff9999)',
      image: '/java.png',
    },
    2: {
      color: 'linear-gradient(to bottom right, #99ccff, #6699ff)',
      image: '/python.png',
    },
    3: {
      color: 'linear-gradient(to bottom right, #66cc66, #99ff99)',
      image: '/angular.png',
    },
    4: {
      color: 'linear-gradient(to bottom right, #ffcc99, #ff9933)',
      image: '/react.png',
    },
    5: {
      color: 'linear-gradient(to bottom right, #cc99ff, #9966ff)',
      image: '/c.png',
    },
    6: {
      color: 'linear-gradient(to bottom right, #6699cc, #336699)',
      image: '/nodejs.png',
    },
    7: {
      color: 'linear-gradient(to bottom right, #99cc99, #66cc66)',
      image: '/dotnet.png',
    },
    8: {
      color: 'linear-gradient(to bottom right, #ff99cc, #ff6699)',
      image: '../../../assets/images/8.jpg',
    },
    9: {
      color: 'linear-gradient(to bottom right, #ffcc99, #ffcc66)',
      image: '../../../assets/images/9.jpg',
    },
    10: {
      color: 'linear-gradient(to bottom right, #669999, #336666)',
      image: '../../../assets/images/10.jpg',
    },
    11: {
      color: 'linear-gradient(to bottom right, #cccc99, #cccc66)',
      image: '../../../assets/images/11.jpg',
    },
    12: {
      color: 'linear-gradient(to bottom right, #ffccff, #ff99ff)',
      image: '../../../assets/images/12.jpg',
    },
    13: {
      color: 'linear-gradient(to bottom right, #ccffff, #66cccc)',
      image: '../../../assets/images/13.jpg',
    },
    14: {
      color: 'linear-gradient(to bottom right, #cc99cc, #996699)',
      image: '../../../assets/images/14.jpg',
    },
    15: {
      color: 'linear-gradient(to bottom right, #ffcccc, #ff9999)',
      image: '../../../assets/images/15.jpg',
    },
  };


generateCards(count: number) {
  for (let i = 1; i <= count; i++) {
    this.cards.push({
      id: i,
      title: `Card ${i}`,
      description: `This is the description for Card ${i}.`
      // add more properties as needed
    });
  }
}
trackById(index: number, card: any): number {
  return card.id;
}
  constructor() { }

  ngOnInit(): void {
    this.generateCards(15);
 
  }
ngAfterViewInit() {
  // setInterval(() => {
  //   try {
  //     this.scrollContainer.nativeElement.scrollLeft += 1;
  //     if (this.scrollContainer.nativeElement.scrollLeft >= this.scrollContainer.nativeElement.scrollWidth) {
  //       this.scrollContainer.nativeElement.scrollLeft = 0;
  //     }
  //   } catch (e) {
  //     console.error('Error occurred while scrolling:', e);
  //   }
  // }, 40); 
}


}
