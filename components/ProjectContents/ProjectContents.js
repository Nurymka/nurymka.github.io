import React from 'react'
import './ProjectContents.scss'
import YouTube from 'react-youtube'
import Gallery from 'react-photo-gallery'
import {PHOTO_SET} from '../helpers.jsx'

export const Projects = {
  kanjiNinja: {
    shortName: 'kn',
    href: 'projects/kanjininja',
    name: 'Kanji Ninja',
    desc: 'fun game to learn drawing 1,000 Japanese characters',
    content: (
      <div className='project-content'>
        <div className='project-column project-column-half'>
          <p><i>ONE OF TOP 3 APPS OF THE DAY ON PRODUCT HUNT:</i><br/>
          <a href='https://www.producthunt.com/tech/kanji-ninja' target='_blank'>www.producthunt.com/tech/kanji-ninja</a></p>
          <p>Learn 1,006 kanjis (教育漢字 - you will know what it means quite soon :)) which Japanese schoolchildren learn for 6 years. With Kanji Ninja, by practicing for 30 minutes a day you should be able to do it much much quicker!</p>
          <p><i>CURRENT FEATURES:</i><br/>
            * Learn kanji, the characters of written Japanese, on the go through engaging mini-sessions where you learn 3 characters at a time. Both stroke order and meaning.<br/>
            * The built-in optical character recognition (OCR) engine can check whether you drew characters correctly or not.<br/>
            * To help with memorization, we first show you the stroke order, then assist you when you’re drawing the kanji for the first time. Then we expect you can recall it on your own. The blank screen shouldn’t scare you ;) Don’t worry if you get it wrong. We’ll hold your hands until you master them all!<br/>
            * All the kanjis are organized by levels. You can’t move on to the next level until you finish the current one.<br/>
            * The ‘panikku’ (‘panic’) game where you have to recall & draw as many characters as possible in 40 seconds.<br/>
            * The adaptive engine tracks your progress and prompts you to review kanjis at just the right time.<br/>
            * Help your ninja pulse reach the new skies with every kanji learned and every 'panikku' game played!<br/>
            * Compete against other learners around the world on the global leaderboard!
          </p>
          <p><i>EXPERTISE GAINED:</i><br/>
          Objective-C, Core Graphics, Realm, CocoaPods, Tesseract (OCR), Sketch 3.</p>
          <p>Built at The Summer Startup School, Almaty, Kazakhstan (July 2015 - August 2015).</p>
        </div>
        <div className='project-column project-column-half'>
          <img src='/assets/knscreenshots.png' className='screens screens-vertical' />
          <a href='https://itunes.apple.com/us/app/kanji-ninja-fun-game-to-learn/id1089121310' target='_blank'>
            <div className='appstore' />
          </a>
        </div>
      </div>
    )
  },

  princetonChat: {
    shortName: 'pc',
    name: 'Princeton.Chat',
    href: 'projects/princetonchat',
    desc: 'a private community that connects Princetonians based on shared interests and common needs',
    content: (
      <div className='project-content'>
        <div className='project-column project-column-half'>
          <p>An internal community (a là YC Bookface) for Princeton alumni and faculty members.</p>
          <div className='youtube-wrapper youtube-wrapper-pc'>
            <YouTube
              videoId='OXvWR4uIZC8'
              opts={{
                width: 280,
                height: 157.5
              }} />
          </div>
          <p><i>CURRENT FEATURES:</i><br/>
            * Princetonians are able to find housing, free food on campus, list jobs and discuss topics they care about the most.<br/>
            * The forum is divided into "channels" to which members subscribe to and get notified of new posts.<br/>
            * A custom built mail server enables members to create new posts and reply to them by email.<br/>
            * All discussions happen in real-time
          </p>
          <p><i>EXPERTISE GAINED:</i><br/>
          Meteor, React, Mantra.js, Heroku, MongoDB, Material UI, vim, git.</p>
          <p>I was part of the core team and was mainly responsible for the front end of the app. Actively participated in making product decisions and crafting working prototypes of new features. (Bay Area, CA, January 2016 - March 2016)</p>
        </div>
        <div className='project-column project-column-half'>
          <img src='/assets/pcscreenshots.png' className='screens' />
          <a href='https://princeton.chat' target='_blank' className='link'>- http://princeton.chat</a>
        </div>
      </div>
    )
  },

  taylr: {
    shortName: 'tylr',
    name: 'Taylr',
    href: 'projects/taylr',
    desc: 'meet a new classmate everyday, and uncover unique connections',
    content: (
      <div className='project-content'>
        <div className='project-column project-column-half'>
          <p>Taylr introduces you to a new classmate on campus every day and explain the connections you share. Launched in University of British Columbia.</p>
          <p><i>CURRENT FEATURES:</i><br/>
            * Recommendation system that bases on classes, interests and clubs students share.<br/>
            * Video chat experience with slowmo, captions and music.<br/>
            * Connecting myUBC accounts enables students to autofill profiles with classes they take.<br/>
            * Integration with Soundcloud, Github, Facebook, Twitter enhances students’ profiles.<br/>
            * Taylr speeddating events organized around the campus
          </p>
          <p><i>EXPERTISE GAINED:</i><br/>
          Meteor, React Native, Swift, SCRecorder, IronWorker, Mocha.</p>
          <p>Built the complete video chat experience, worked on integrations with third-party services and helped to rewrite the app in React Native. (Mountain View, CA, September 2015 - December 2015)</p>
        </div>
        <div className='project-column project-column-half'>
          <img src='/assets/tylrscreenshots.png' className='screens screens-vertical screens-tylr' />
          <a href='https://taylrapp.com' target='_blank' className='link'>- http://taylrapp.com</a>
        </div>
      </div>
    )
  },

  nukte: {
    shortName: 'nkt',
    name: 'nukte.',
    href: 'projects/nukte',
    desc: 'an addictive puzzle game about connecting lively and colorful dots',
    content: (
      <div className='project-content'>
        <div className='project-column project-column-half'>
          <p>nukte. is a game about connections and happiness:</p>
          <p><i>CURRENT FEATURES:</i><br/>
            * Three different modes: timed, brain shift, confusion<br/>
            * Timed mode - beat the clock by connecting dots of the same color and getting the highest score in 45 seconds<br/>
            * Brain shift mode - look for even numbers or vowels<br/>
            * Confusion mode - make as many connections as possible - dots will try to throw you off - pay attention to the word, not the color!<br/>
            * Different powerups used during the game<br/>
            * Achievements and badges<br/>
            * Thoughtful, beautiful and fun minimalistic design<br/>
            * Relaxing game music<br/>
            * Reach the top of the leaderboards
          </p>
          <p><i>EXPERTISE GAINED:</i><br/>
          Objective-C, Cocos2D, SpriteBuilder</p>
          <p>Built at MakeSchool Summer Academy, San Francisco, CA. (June 2014 - August 2014)</p>
        </div>
        <div className='project-column project-column-half'>
          <img src='/assets/nktscreenshots.png' className='screens screens-vertical' />
          <a href='https://itunes.apple.com/us/app/nukte/id1059117899' target='_blank'>
            <div className='appstore' />
          </a>
        </div>
      </div>
    )
  }
}

export const Interests = {
  speedcubing: {
    shortName: 'cube',
    name: 'Speedcubing',
    href: 'interests/speedcubing',
    desc: "solving Rubik's Cubes competitively",
    content: (
      <div className='project-content'>
        <div className='project-column'>
          <p>The 11 official international World Cube Association competitions I participated in 2011-2015 resulted in:</p>
          <div className='medals-container'>
            <div className='medal-container'>
              <div className='medal medal-gold'/>
              <h6>4 golds</h6>
            </div>
            <div className='medal-container'>
              <div className='medal medal-silver'/>
              <h6>10 silvers</h6>
            </div>
            <div className='medal-container'>
              <div className='medal medal-bronze'/>
              <h6>8 bronzes</h6>
            </div>
          </div>
          <p>At every competition, I competed in about 12 events:<br/>
          2x2, 3x3, 4x4, 5x5, 6x6, 7x7, 3x3 one-handed, 3x3 fewest moves, Megaminx, Pyraminx, Square-1.
          </p>
          <div className='youtube-wrapper'>
            <YouTube
              videoId='yzWAzV9-xUI'
              opts={{
                width: 280,
                height: 157.5
              }} />
          </div>
          <h6 className='reset-size'>{"My fastest official Rubik's Cube solve on record"}</h6>
          <p><i>My results and records:</i><br/>
            * 4th all-time Asian record in 4x4 cube: 30.19 seconds<br/>
            * CIS record in 4x4 cube: 30.19 seconds single, 37.12 seconds average<br/>
            * The average 3x3x3 solve time is 8-10 seconds under the competition environment<br/>
            * Berkeley Summer 2013, Berkeley, CA: one silver<br/>
            * World Championship 2013, Las Vegas, NV: finalist at 4x4, 5x5, 6x6 cubes<br/>
            * MPEI Open 2013, Moscow, Russia: one silver and three bronzes<br/>
            * Berkeley Summer 2013, Berkeley, CA: one silver<br/>
            * Ukrainian Open 2013, Kiev, Ukraine: four golds, two bronzes<br/>
            * MPEI Open 2012, Moscow, Russia: three silvers, one bronze<br/>
            * MNW Open 2012, Moscow, Russia: three silvers, two bronzes<br/>
            * Ukraine Open 2012, Kiev, Ukraine<br/>
            * World Championship 2011, Bangkok, Thailand: fastest solves for Kazakhstan<br/>
            * Russia Open 2011, Moscow, Russia: one silver<br/>
            * Kyiv Open 2011, Kiev, Ukraine<br/>
          </p>
          <p>World Cube Association profile:<br/>
          <a href='https://www.worldcubeassociation.org/results/p.php?i=2011KUDA01' target='_blank'>worldcubeassociation.org/results/p.php?i=2011KUDA01</a><br/>
          iWCA.jp profile:<br/>
          <a href='http://iwca.jp/person/detail/id/2011KUDA01' target='_blank'>iwca.jp/person/detail/id/2011KUDA01</a><br/>
          Over the years of speedcubing, I shot videos of my Rubik’s Cube solves to track my progress and did online battles with
          cubers around the world on YouTube:<br/>
          <a href='https://www.youtube.com/user/Nurimkz1/videos' target='_blank'>youtube.com/user/Nurimkz1/videos</a>
          </p>
        </div>
      </div>
    )
  },

  photography: {
    shortName: 'ph',
    name: 'Photography',
    href: 'interests/photography',
    desc: 'wandering around the world and capturing life moments',
    content: (
      <div className='project-content'>
        <div className='project-column'>
          <h6 className='margin-bottom'>{"I usually carry my Nikon D7000 around. Here's a collection of utter randomness that has piled up on it: "}</h6>
          <Gallery photos={PHOTO_SET} />
        </div>
      </div>
    )
  }
}
