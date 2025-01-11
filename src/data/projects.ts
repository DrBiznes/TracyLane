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
    }
  ]
};

export default projectsData; 