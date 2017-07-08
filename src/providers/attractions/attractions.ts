import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the AttractionsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AttractionsProvider {

  attractions: any[] = []
  categories: any[] = []
  constructor(public http: Http) {
    console.log('Hello AttractionsProvider Provider');
    let attractions = [
      {
        "id": "1",
        "type": "Shopping",
        "title": "The Dubai Mall",
        "budget": "Any",
        "teamSize": "Any",
        "image": "assets/attractions/attraction1.jpg",
        "description": "The Dubai Mall features the world-class Dubai Aquarium & Underwater Zoo featuring thousands of aquatic animals and a 270-degree walkthrough tunnel. The strong family entertainment components include KidZania®, an innovative children’s ‘edutainment’ concept; SEGA Republic, a 76,000 sq ft high adrenaline indoor theme park; the 22-screen Reel Cinemas megaplex with a total capacity of 2,800 seats; and the Olympic-sized Dubai Ice Rink. For visitors, there is an adjoining 5-star premium hotel, The Address Dubai Mall and car parking for over 14,000 vehicles.",
        "operationTiming": {
          "openingTime": "10:00 AM",
          "closingTime": "08:00 PM"
        },
        "rating": "",
        "review": "",
        "location": {
          "latitude": "25.198518",
          "longitude": "55.2446001"
        },
        "address": {
          "place": "Dubai MALL",
          "city": "Dubai",
          "country": "AE",
          "postalCode": "31166",
          "state": "Dubai"
        },
        "gallery": ["http://www.shortlistDubai.com/sites/default/files/styles/article_small_picture/public/images/2016/11/29/Google-Maps-Burj.jpg", "https://s-media-cache-ak0.pinimg.com/236x/3c/c0/63/3cc06374b1bc5a665e24b97de4d3a214--google-images-safari.jpg"],
        "categories": "Shopping,Adventure",
        "tags": ["Top Rated", "Recommended"],
        "ageGroup": "ANY",
        "timeToVisit": "10:00 AM - 12:00 AM",
        "subPlaces": ["Dubai Aquarium & Underwater Zoo", "The Dubai Fountain", "SEGA Republic", "Dubai Dolphinarium"]
      },
      {
        "id": "2",
        "type": "Adventure",
        "title": "WILD WADI WATERPARK",
        "budget": "Any",
        "teamSize": "Any",
        "image": "assets/attractions/attraction2.jpg",
        "description": "Located in Dubai and situated in front of the stunning Burj Al Arab, Wild Wadi offers 30 rides and attractions for all the family. Wild Wadi is themed around the tale of Juha, a known character from the Arabian folklore.",
        "operationTiming": {
          "openingTime": "02:00 PM",
          "closingTime": "06:00 PM"
        },
        "rating": "",
        "review": "",
        "location": {
          "latitude": "25.1394138",
          "longitude": "55.1866553"
        },
        "address": {
          "place": "Jumeira Road, Umm Suqeim 3",
          "city": "Dubai",
          "country": "AE",
          "postalCode": "26416",
          "state": "Dubai"
        },
        "gallery": ["http://www.tropicDubaitours.com/wp-content/uploads/2015/12/Wild-Wadi-water-park-jumeirah1-1.jpg", "https://mediastream.jumeirah.com/webimage/heroactual//globalassets/global/hotels-and-resorts/Dubai/wild-wadi/information/wild-wadi-caring-hero.jpg"],
        "categories": "Adventure,Sports,Watergames,Kids",
        "tags": ["Top Rated", "Recommended", "For You"],
        "ageGroup": "ANY",
        "timeToVisit": "10:00 AM - 7:00 PM",
        "subPlaces": ["Dubai Aquarium & Underwater Zoo", "The Dubai Fountain", "SEGA Republic", "Dubai Dolphinarium"],

      },
      {
        "id": "3",
        "type": "Beaches",
        "title": "YAS BEACH",
        "budget": "Any",
        "teamSize": "Any",
        "image": "assets/attractions/attraction3.jpg",
        "description": "Set on a majestic stretch of white sand, and easily connected to all of the island’s diverse leisure activities, this laid-back beach is a blissful new development on the emirate’s entertainment district.",
        "operationTiming": {
          "openingTime": "05:00 PM",
          "closingTime": "08:00 PM"
        },
        "rating": "",
        "review": "",
        "location": {
          "latitude": "24.462072",
          "longitude": "54.5899913"
        },
        "address": {
          "place": "Yas Island, Opp Crown Plaza",
          "city": "Abu Dhabi",
          "country": "AE",
          "postalCode": "26416",
          "state": "Abu Dhabi"
        },
        "gallery": ["http://www.yasbeach.ae/wp-content/uploads/2015/11/YasBeach_BegelaART_113_20.11.15.jpg", "http://www.tourprom.ru/site_media/images/poiphoto/abu-dabi-yas_beach-04_1.jpg"],
        "categories": "Beaches,Sports,Watergames,Kids,kayaking,Jet Skis, banana rides",
        "tags": "",
        "ageGroup": "ANY",
        "timeToVisit": "10:00 AM - 7:00 PM",
        "subPlaces": ["Ferrari World Abu Dhabi", "Emirates Park Zoo", "Yas Waterworld", "Abu Dhabi Hill"]
      },
      {
        "id": "4",
        "type": "Resorts",
        "title": "ARABIAN NIGHTS VILLAGE",
        "budget": "Any",
        "teamSize": "Any",
        "image": "assets/attractions/attraction4.jpg",
        "description": "Nestled among stunning dunes, Arabian Nights Village harnesses the soul and essence of old Arabia. Conceived to let visitors experience the mythical and timeless beauty of the desert and aspects of traditional Emirati life. ",
        "operationTiming": {
          "openingTime": "12:00 AM",
          "closingTime": "11:59 PM"
        },
        "rating": "",
        "review": "",
        "location": {
          "latitude": "23.8869805",
          "longitude": "55.0196171"
        },
        "address": {
          "place": "Arabian Nights Village Road",
          "city": "Abu Dhabi",
          "country": "AE",
          "postalCode": "26416",
          "state": "Abu Dhabi"
        },
        "gallery": ["http://arabiannightsvillage.com/wp-content/uploads/2015/11/Slider-4.jpg", "http://arabiannightsvillage.com/wp-content/uploads/2015/11/Slider-2.jpg"],
        "categories": "Resorts,Desert,Nightcamp,Camping,Desert Safari",
        "tags": "",
        "ageGroup": "ANY",
        "timeToVisit": "12:00 AM - 11:59 PM",
        "subPlaces": ["Ferrari World Abu Dhabi", "Emirates Park Zoo", "Yas Waterworld", "Abu Dhabi Hill"]
      },
      {
        "id": "5",
        "type": "Entertainment",
        "title": "The Music Hall",
        "budget": "Any",
        "teamSize": "Any",
        "image": "assets/attractions/attraction5.jpg",
        "description": "It's not a theatre, not a club, not a bar and not a restaurant – the lavishly designed MusicHall is all those things. The concept hails from Beirut, where it's had audiences clapping since 2003 with an eclectic line-up of live music – from Indian to country, and rock to Russian ballads.",
        "operationTiming": {
          "openingTime": "9:00 PM",
          "closingTime": "3:00 AM"
        },
        "rating": "",
        "review": "",
        "location": {
          "latitude": "25.0984578",
          "longitude": "55.1214093"
        },
        "address": {
          "place": "Jumeirah Zabeel Saray Hotel, Palm Jumeirah",
          "city": "Dubai",
          "country": "AE",
          "postalCode": "26416",
          "state": "Dubai"
        },
        "gallery": ["http://tocdn2-35e9.kxcdn.com/thumb/md-8/outlets/musichall/2013_musichall_1_base.jpg", "http://www.amxti.com/uploads/12112016125927The-Music-Hall.jpg"],
        "categories": "Music,Events,Live Events,Songs,Concerts",
        "tags": "",
        "ageGroup": "ANY",
        "timeToVisit": "9:00 PM - 3:00 AM",
        "subPlaces": ["The Palm Jumeirah", "Aquaventure Beach"]
      },
      {
        "id": "6",
        "type": "Entertainment",
        "title": "Abu Dhabi Classics",
        "budget": "Any",
        "teamSize": "Any",
        "image": "assets/attractions/attraction6.jpg",
        "description": "This concert series brings top classical performances – including renowned international soloists and famous orchestras – to such venues as the Emirates Palace and Manarat Al Saadiyat in Abu Dhabi and the historic Al Jahili Fort in Al Ain.",
        "operationTiming": {
          "openingTime": "9:00 PM",
          "closingTime": "3:00 AM"
        },
        "rating": "",
        "review": "",
        "location": {
          "latitude": "24.4840659",
          "longitude": "54.3746709"
        },
        "address": {
          "place": "Makeen Tower - 9th St",
          "city": "Abu Dhabi",
          "country": "AE",
          "postalCode": "26416",
          "state": "Abu Dhabi"
        },
        "gallery": ["http://reactmena.com/files/23.jpg", "https://i.ytimg.com/vi/YS3LjoZatI0/hqdefault.jpg"],
        "categories": "Music,Events,Live Events,Songs,Concerts",
        "tags": ["Dance"],
        "ageGroup": "ANY",
        "timeToVisit": "9:00 PM - 3:00 AM",
        "subPlaces": [""]
      },
      {
        "id": "7",
        "type": "Entertainment",
        "title": "Qasr al-Hosn",
        "budget": "Any",
        "teamSize": "Any",
        "image": "assets/attractions/attraction7.jpg",
        "description": "The Qasr al-Hosn is the oldest stone building in the city of Abu Dhabi, the capital of the United Arab Emirates",
        "operationTiming": {
          "openingTime": "9:00 AM",
          "closingTime": "3:00 PM"
        },
        "rating": "",
        "review": "",
        "location": {
          "latitude": "24.48239",
          "longitude": "54.35482"
        },
        "address": {
          "place": "Zayed the First St",
          "city": "Abu Dhabi",
          "country": "AE",
          "postalCode": "26416",
          "state": "Abu Dhabi"
        },
        "gallery": ["http://reactmena.com/files/23.jpg", "https://i.ytimg.com/vi/YS3LjoZatI0/hqdefault.jpg"],
        "categories": "Music,Events,Live Events,Songs,Concerts",
        "tags": "",
        "ageGroup": "ANY",
        "timeToVisit": "9:00 PM - 3:00 AM",
        "subPlaces": [""]
      },
      {
        "id": "8",
        "type": "Entertainment",
        "title": "Qasr al-Hosn",
        "budget": "Any",
        "teamSize": "Any",
        "image": "assets/attractions/attraction8.jpg",
        "description": "The Landmark is a postmodern supertall skyscraper in Abu Dhabi, United Arab Emirates.[1] The mixed-use project stands 324 metres (1,063 ft)[2] tall with 72 floors above ground and five basement levels.[1] Construction on the skyscraper started in late 2006 and the building was completed in 2012. It is the second tallest building in Abu Dhabi behind the Burj Mohammed bin Rashid in the Central Market Project World Trade Center complex",
        "operationTiming": {
          "openingTime": "9:00 AM",
          "closingTime": "3:00 PM"
        },
        "rating": "",
        "review": "",
        "location": {
          "latitude": "24.48239",
          "longitude": "54.35482"
        },
        "address": {
          "place": "Al-Hosn Zayed ",
          "city": "Abu Dhabi",
          "country": "AE",
          "postalCode": "26416",
          "state": "Abu Dhabi"
        },
        "gallery": ["http://reactmena.com/files/23.jpg", "https://i.ytimg.com/vi/YS3LjoZatI0/hqdefault.jpg"],
        "categories": "Music,Events,Live Events,Songs,Concerts",
        "tags": "For You",
        "ageGroup": "ANY",
        "timeToVisit": "9:00 PM - 3:00 AM",
        "subPlaces": [""]
      },
      {
        "id": "9",
        "type": "Entertainment",
        "title": "Carpet Souk",
        "budget": "Any",
        "teamSize": "Any",
        "image": "assets/attractions/attraction9.jpg",
        "description": "This market specializes in machine-made & traditional handmade carpets, rugs, kilims & cushions.",
        "operationTiming": {
          "openingTime": "4:00 PM",
          "closingTime": "6:00 PM"
        },
        "rating": "",
        "review": "",
        "location": {
          "latitude": "24.484955",
          "longitude": "54.35076"
        },
        "address": {
          "place": "Port Zayed ",
          "city": "Abu Dhabi",
          "country": "AE",
          "postalCode": "26416",
          "state": "Abu Dhabi"
        },
        "gallery": ["http://reactmena.com/files/23.jpg", "https://i.ytimg.com/vi/YS3LjoZatI0/hqdefault.jpg"],
        "categories": "Music,Events,Live Events,Songs,Concerts",
        "tags": "",
        "ageGroup": "ANY",
        "timeToVisit": "9:00 PM - 3:00 AM",
        "subPlaces": [""]
      },
      {
        "id": "10",
        "type": "Entertainment",
        "title": "Dhow Harbor and Iranian Souk",
        "budget": "Any",
        "teamSize": "Any",
        "image": "assets/attractions/attraction10.jpg",
        "description": "Busy port offering views of traditional dhow vessels & a marketplace with foods & goods.",
        "operationTiming": {
          "openingTime": "2:00 AM",
          "closingTime": "4:00 PM"
        },
        "rating": "",
        "review": "",
        "location": {
          "latitude": "24.48239",
          "longitude": "54.35482"
        },
        "address": {
          "place": "Harbor Dhow St ",
          "city": "Abu Dhabi",
          "country": "AE",
          "postalCode": "26416",
          "state": "Abu Dhabi"
        },
        "gallery": ["http://reactmena.com/files/23.jpg", "https://i.ytimg.com/vi/YS3LjoZatI0/hqdefault.jpg"],
        "categories": "Music,Events,Live Events,Songs,Concerts",
        "tags": "City Heritage, For You",
        "ageGroup": "ANY",
        "timeToVisit": "9:00 PM - 3:00 AM",
        "subPlaces": [""]
      },
      {
        "id": "11",
        "type": "Entertainment",
        "title": "Marjan Island resort and spa",
        "budget": "Any",
        "teamSize": "Any",
        "image": "assets/attractions/attraction11.jpg",
        "description": "On a man-made island, this elegant coastal resort is 9 km from the Al Hamra Golf Club and 14 km from Ice Land Water Park and the Al Hamra Marina & Yacht Club",
        "operationTiming": {
          "openingTime": "8:00 AM",
          "closingTime": "10:00 AM"
        },
        "rating": "",
        "review": "",
        "location": {
          "latitude": "24.48239",
          "longitude": "54.35482"
        },
        "address": {
          "place": "Marjan Island Boulevard",
          "city": "Ras al Khaimah",
          "country": "AE",
          "postalCode": "26416",
          "state": "Abu Dhabi"
        },
        "gallery": ["http://reactmena.com/files/23.jpg", "https://i.ytimg.com/vi/YS3LjoZatI0/hqdefault.jpg"],
        "categories": "Music,Events,Live Events,Songs,Concerts",
        "tags": "",
        "ageGroup": "ANY",
        "timeToVisit": "9:00 PM - 3:00 AM",
        "subPlaces": [""]
      },
      {
        "id": "12",
        "type": "Entertainment",
        "title": "Al Jazirah al Hamra Fort - Heritage Old Village",
        "budget": "Any",
        "teamSize": "Any",
        "image": "assets/attractions/attraction12.jpg",
        "description": "Al Jazirah Al Hamra is a town to the south of the city of Ras al-Khaimah in the United Arab Emirates. It is known for its collection of abandoned houses and other buildings, including a mosque, which are widely believed locally to be haunted.[1][2][3] The town was originally home to three tribes and ruled by the Al-Zaab tribe, which was rehoused in Abu Dhabi following a dispute with the Ruler of Ras Al Khaimah.",
        "operationTiming": {
          "openingTime": "8:00 AM",
          "closingTime": "10:00 AM"
        },
        "rating": "",
        "review": "",
        "location": {
          "latitude": "25.708889",
          "longitude": "55.797222"
        },
        "address": {
          "place": "Historical landmark in Al Jazirah Al Hamra, United Arab Emirates",
          "city": "Ras al Khaimah",
          "country": "AE",
          "postalCode": "26416",
          "state": "Abu Dhabi"
        },
        "gallery": ["http://reactmena.com/files/23.jpg", "https://i.ytimg.com/vi/YS3LjoZatI0/hqdefault.jpg"],
        "categories": "Music,Events,Live Events,Songs,Concerts",
        "tags": "",
        "ageGroup": "ANY",
        "timeToVisit": "9:00 PM - 3:00 AM",
        "subPlaces": [""]
      },
      {
        "id": "13",
        "type": "Entertainment",
        "title": "Al Jazirah Al Hamra",
        "budget": "Any",
        "teamSize": "Any",
        "image": "assets/attractions/attraction13.jpg",
        "description": "Al Jazirah Al Hamra is a town to the south of the city of Ras al-Khaimah in the United Arab Emirates. It is known for its collection of abandoned houses and other buildings, including a mosque, which are widely believed locally to be haunted",
        "operationTiming": {
          "openingTime": "8:00 AM",
          "closingTime": "10:00 AM"
        },
        "rating": "",
        "review": "",
        "location": {
          "latitude": "25.708889",
          "longitude": "55.797222"
        },
        "address": {
          "place": " Jazira Alhamra Old Village",
          "city": "Ras al Khaimah",
          "country": "AE",
          "postalCode": "26416",
          "state": "Abu Dhabi"
        },
        "gallery": ["http://reactmena.com/files/23.jpg", "https://i.ytimg.com/vi/YS3LjoZatI0/hqdefault.jpg"],
        "categories": "Music,Events,Live Events,Songs,Concerts",
        "tags": "",
        "ageGroup": "ANY",
        "timeToVisit": "9:00 PM - 3:00 AM",
        "subPlaces": [""]
      }
    ];
    this.attractions = attractions;


    this.categories = [{
      "id": "1",
      "title": "Top Rated"
    }, {
      "id": "2",
      "title": "For You"
    }, {
      "id": "3",
      "title": "Adventure"
    }, {
      "id": "4",
      "title": "City Heritage"
    }, {
      "id": "5",
      "title": "Amusement Parks"
    }, {
      "id": "6",
      "title": "Arts & Design"
    }, {
      "id": "7",
      "title": "Sports"
    }, {
      "id": "8",
      "title": "Fitness & Spa"
    }, {
      "id": "9",
      "title": "Shopping"
    }, {
      "id": "10",
      "title": "Beaches"
    }, {
      "id": "11",
      "title": "Indoors"
    }, {
      "id": "12",
      "title": "Outdoors"
    }, {
      "id": "13",
      "title": "Kids"
    }];
  }

  getAllAttractions() {
    return this.attractions;
  }

  getAttractions(ids: any[]) {
    let attractions: any[];
    attractions = this.attractions.filter(item => ids.indexOf(item.id) > -1);
    return attractions;
  }

  saveAttractions(attractions: any) {
    let index = this.attractions.indexOf(item => item.id == attractions.id)
    if (index != -1) {
      this.attractions[index] = attractions;
    }
  }

  getCategories() {
    return this.categories;
  }

}
