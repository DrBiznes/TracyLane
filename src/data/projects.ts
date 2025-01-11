export interface Credit {
  role: string;
  name: string;
}

export interface ProjectLinks {
  youtube?: string;
  spotify?: string;
  appleMusic?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  body: string;
  credits?: Credit[];
  imageUrl: string;
  imageAlt?: string;
  backgroundImage?: string;
  aspectRatio: 'square' | 'portrait' | 'landscape';
  links: ProjectLinks;
}

export interface ProjectsData {
  projects: Project[];
}

export const projectsData: ProjectsData = {
  projects: [
    {
      id: "on-the-line",
      title: "On The Line",
      description: "Music Production & Creative Direction",
      body: "During a car ride back to his place, an old friend from high school showed me a song he was working on. I immediately knew I could make it sound great.  He gave me the opportunity, emailed his tracks, and let me know what he was expecting out of the mix. With just my laptop I made it into what it is today.",
      credits: [
        {
          role: "Artist",
          name: "Trav"
        },
        {
          role: "Mixing",
          name: "Tracy Lane"
        }
      ],
      imageUrl: "/project/OnTheLine.jpg",
      imageAlt: "On The Line Album Cover",
      backgroundImage: "/project/mixerchanels.jpg",
      aspectRatio: "square",
      links: {
        youtube: "https://www.youtube.com/watch?v=b48VpQ5rWGo"
      }
    },
    {
      id: "five-six-thousand-times",
      title: "FIVE, SIX THOUSAND TIMES",
      description: "Mixing and Mastering",
      body: "Of all the songs on Jack's album, this one I think is the best. Yes, I am biased because I got to mix some of it. That being said, I don't think I need to defend that opinion. One listen should be enough for it to speak for itself. I am honored that I was part of making such a good song.",
      credits: [
        {
          role: "Artist",
          name: "Jack Redmond"
        },
        {
          role: "Mixing",
          name: "Tracy Lane"
        }
      ],
      imageUrl: "/project/ThroughSpace.jpg",
      imageAlt: "FIVE, SIX THOUSAND TIMES Album Cover",
      backgroundImage: "/project/tsatmixing.jpg",
      aspectRatio: "square",
      links: {
        spotify: "https://open.spotify.com/track/1HY1hr2tKtsyxvQqaONiSY?si=b6106aa5aa1f49d2",
        appleMusic: "https://music.apple.com/us/album/five-six-thousand-times/1616785888?i=1616785893"
      }
    },
    {
      id: "the-greely",
      title: "The Greely",
      description: "Screenplay & Production",
      body: "For quite some time now, I have been a horror movie fanatic. When the opportunity came to write a screenplay for a horror/noir themed music video. In all honestly, I wasn't sure people were going to get it. With Carl Tinsley's directing and editing, we included all the scary visuals and sound bites we could.  I was also super excited that I got the chance to do some foley work on this. With all the hours we put into this over the span of a year, we are really happy with how it turned out. One of the best compliments we got on this project was in a text message sent to me. \"Holy SHIT\" \"this is a Jordan peele movie on crack\" - Elizabeth Sgro",
      credits: [
        {
          role: "Director",
          name: "Carl Tinsley"
        },
        {
          role: "Writing & Production",
          name: "Tracy Lane"
        }
      ],
      imageUrl: "/project/greelycover.jpg",
      imageAlt: "The Greely Horror Music Video",
      backgroundImage: "/project/greely.jpg",
      aspectRatio: "landscape",
      links: {
        youtube: "https://www.youtube.com/watch?v=36tsnhlhg04"
      }
    },
    {
      id: "astro-monkey",
      title: "Astro Monkey",
      description: "Music Production & Mixing",
      body: "One day at work during the covid season, I brought my laptop with me and started producing some instrumental tracks. I made one of my first attempts at a synthwave beat. The project was then sitting on my laptop for months collecting dust. In spring of 2022 I showed a friend of mine what I had made, and he wrote some lyrics for it on the spot. A couple more friends contributed vocals and it became one of our proudest creations. Entirely mixed in my own bedroom, we created a song about the beauty of space and peace of mind. Once you are floating amongst the stars, you may never want to go back.",
      credits: [
        {
          role: "Artist",
          name: "The Rage Crusade"
        },
        {
          role: "Production & Mixing",
          name: "Tracy Lane"
        }
      ],
      imageUrl: "/project/Astromonkey.jpg",
      imageAlt: "Astro Monkey Album Cover",
      backgroundImage: "/project/astromonkeybg.jpg",
      aspectRatio: "square",
      links: {
        spotify: "https://open.spotify.com/track/7kyg2fekqo4kzvjpdxvrf5si0b28684ffe0448ea",
        appleMusic: "https://music.apple.com/us/album/astro-monkey/1618641040?i=1618641041"
      }
    }
  ]
};

export default projectsData; 