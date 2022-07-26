import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import PrimaryButton from './components/primary-button'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Would You | Discord Bot</title>
          <meta
            name="description"
            content="Would you is a fun little bot for every server! Provide your server with fun little would you questions!"
          />
          <meta property="og:title" content="Would You | Discord Bot" />
          <meta
            property="og:description"
            content="Would you is a fun little bot for every server! Provide your server with fun little would you questions!"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/c74c7122-7b7d-4226-b811-3b50847ba79b/d0db2645-4e5c-44c7-b5c4-33bd82f3b673?org_if_sml=1"
          />
        </Head>
        <div data-role="Header" className="home-header-container">
          <header className="home-header">
            <div className="home-logo">
              <Link href="/">
                <a className="home-link">
                  <img
                    alt="image"
                    src="/playground_assets/logo-200h.png"
                    className="home-image"
                  />
                </a>
              </Link>
            </div>
            <div className="home-menu">
              <a href="#features" className="home-text">
                Features
              </a>
              <a href="#stats" className="home-text01">
                Stats
              </a>
              <a
                href="https://top.gg/bot/981649513427111957/vote"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link01"
              >
                Vote
              </a>
            </div>
            <a
              href="https://discord.com/oauth2/authorize?client_id=981649513427111957&amp;permissions=274878294080&amp;scope=bot%20applications.commands"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link02"
            >
              Invite
            </a>
            <div className="home-container01"></div>
            <div data-type="BurgerMenu" className="home-burger-menu">
              <svg viewBox="0 0 1024 1024" className="home-menu1">
                <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
                <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
                <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              </svg>
            </div>
          </header>
          <div data-type="MobileMenu" className="home-mobile-menu">
            <div className="home-top">
              <div className="home-logo1">
                <img
                  alt="image"
                  src="/playground_assets/logo-200h.png"
                  className="home-image1"
                />
              </div>
              <div data-type="CloseMobileMenu" className="home-close-menu">
                <svg viewBox="0 0 1024 1024" className="home-icon3">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="home-mid"></div>
            <a className="home-text02" href='#features'>Features</a>
            <a className="home-text03" href='#stats'>Stats</a>
            <a className="home-text04" href='https://top.gg/bot/981649513427111957/vote'>Vote</a>
            <a className="home-text05" href='https://discord.com/oauth2/authorize?client_id=981649513427111957&permissions=274878294080&scope=bot%20applications.commands'>Invite</a>
          </div>
        </div>
        <div className="home-main">
          <img
            alt="image"
            src="/playground_assets/turquoise-circle1.svg"
            className="home-turquoise-cirble"
          />
          <img
            alt="image"
            src="/playground_assets/purple-circle1.svg"
            loading="eager"
            className="home-purple-circle"
          />
          <img
            alt="image"
            src="/playground_assets/left-500w.png"
            className="home-left"
          />
          <img
            alt="image"
            src="/playground_assets/right-700w.png"
            className="home-right"
          />
          <div className="home-hero">
            <div className="home-container02">
              <h1 className="home-text06 headline1">
                <span className="home-text07">Entertain</span>
                <br></br>
                <span className="home-text09">Your</span>
                <br></br>
                <span className="home-text11">Discord Server</span>
                <span className="home-text12">.</span>
              </h1>
              <a
                href="https://discord.com/oauth2/authorize?client_id=981649513427111957&amp;permissions=274878294080&amp;scope=bot%20applications.commands"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link03"
              >
                <PrimaryButton
                  button="Invite Would You"
                  rootClassName="primary-button-root-class-name"
                  className="home-component"
                ></PrimaryButton>
              </a>
            </div>
            <img
              alt="image"
              src="/playground_assets/wouldyou1.svg"
              className="home-image2"
            />
          </div>
        </div>
        <div className="home-features">
          <h2 id="features" className="home-text13 headline2">
            <span>Our Features</span>
            <span className="home-text15">.</span>
          </h2>
          <span className="home-text16">
            <span className="home-text17">
              Would you provided a bunch of features right out of the box such
              as the ones given below!
            </span>
            <span className="home-text18"></span>
          </span>
          <div className="home-features1"></div>
          <div className="home-container03"></div>
        </div>
        <div className="home-features2">
          <h2 id="stats" className="home-text19 headline2">
            <span>Stats</span>
            <span className="home-text21">.</span>
          </h2>
          <span className="home-text22">
            <span className="home-text23">
              Would You is trusted by hundreds of thousands of users all around
              the world in over 100 active servers
            </span>
          </span>
          <span className="home-text24">
            <span className="home-text25">
              Lorem ipsum is common placeholder text used to demonstrate the
              graphic elements of a document or visual presentation.
            </span>
          </span>
          <div className="home-container04"></div>
        </div>
        <div className="home-c-t-a">
          <div className="home-container05">
            <div className="home-container06">
              <h2 className="headline2 home-text26">
                <span className="home-text27">
                  Keep Your Server Active -
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text28">Would You</span>
              </h2>
              <span className="home-text29 lead1">
                <span>
                  Our bot provides your server with hundreds of funny possible
                  superpowers ready to start a conversation with.
                </span>
                <br></br>
                <span>
                  Starting a conversation and making new friends through discord
                  has never been this easy!
                </span>
              </span>
              <a
                href="https://discord.com/oauth2/authorize?client_id=981649513427111957&amp;permissions=274878294080&amp;scope=bot%20applications.commands"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link04 subtitle2"
              >
              </a>
            </div>
            <div className="home-container07">
            </div>
          </div>
        </div>
        <div className="home-footer">
          <footer className="home-container08">
            <div className="home-container09">
              <img
                alt="image"
                src="/playground_assets/logo-200h.png"
                className="home-image4"
              />
            </div>
            <div className="home-container10">
              <span>
                <span>
                  Verified by
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <a className="home-text35" href="https://support.discord.com/hc/en-us/articles/360040720412-Bot-Verification-and-Data-Whitelisting#h_46b3869c-6d50-43fc-b07c-9ed7569a1160" target="_blank" rel="noreferrer noopener">Discord</a>
              </span>
            </div>
            <div className="home-container11">
              <div className="home-container12">
                <a
                  href="https://discord.com/oauth2/authorize?client_id=981649513427111957&amp;permissions=274878294080&amp;scope=bot%20applications.commands"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link05"
                >
                  Invite
                </a>
                <a
                  href="https://github.com/Developer-Dungeon-Studio/Would-You"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link06"
                >
                  Github
                </a>
                <a
                  href="https://discord.com/invite/KfBkKKydfg"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link07"
                >
                  Discord
                </a>
                <a
                  href="https://top.gg/bot/981649513427111957/vote"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link08"
                >
                  Vote
                </a>
                <a
                  href="https://raw.githubusercontent.com/Developer-Dungeon-Studio/Would-You/main/PRIVACY-POLICY"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link09"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
            <span className="home-text36 body2">
              © 2022 Developers Dungeon. Would You is not affiliated with
              Discord!
            </span>
            <div className="home-divider"></div>
          </footer>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            height: auto;
            display: flex;
            z-index: 100;
            overflow: hidden;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: #191919;
          }
          .home-header-container {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-header {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-doubleunit);
            z-index: 100;
            position: relative;
            max-width: 1110px;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-logo {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-link {
            display: contents;
          }
          .home-image {
            width: 54px;
            height: 54px;
            box-shadow: 5px 5px 10px 0px #353434;
            object-fit: cover;
            border-color: var(--dl-color-gray-900);
            border-width: 0px;
            border-radius: var(--dl-radius-radius-radius6);
            text-decoration: none;
          }
          .home-menu {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-text {
            color: #ffffff;
            transition: 0.3s;
            margin-right: var(--dl-space-space-doubleunit);
            text-decoration: none;
          }
          .home-text:hover {
            color: #0498f7;
            border-radius: var(--dl-radius-radius-radius4);
            text-decoration: none;
          }
          .home-text01 {
            color: #ffffff;
            transition: 0.3s;
            margin-right: var(--dl-space-space-doubleunit);
            text-decoration: none;
          }
          .home-text01:hover {
            color: #0498f7;
            border-radius: var(--dl-radius-radius-radius4);
            text-decoration: none;
          }
          .home-link01 {
            color: #ffffff;
            transition: 0.3s;
            text-decoration: none;
          }
          .home-link01:hover {
            color: #0498f7;
            border-radius: var(--dl-radius-radius-radius4);
            text-decoration: none;
          }
          .home-link02 {
            color: #ffffff;
            transition: 0.3s;
            margin-right: var(--dl-space-space-doubleunit);
            text-decoration: none;
          }
          .home-link02:hover {
            color: #0498f7;
            border-radius: var(--dl-radius-radius-radius4);
            text-decoration: none;
          }
          .home-container01 {
            display: flex;
            align-items: center;
            border-color: rgba(120, 120, 120, 0.4);
            border-style: dashed;
            border-width: 0px;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-burger-menu {
            display: none;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-menu1 {
            width: 24px;
            height: 24px;
            margin-left: var(--dl-space-space-unit);
          }
          .home-mobile-menu {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: var(--dl-space-space-doubleunit);
            z-index: 101;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .home-top {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
            justify-content: space-between;
          }
          .home-logo1 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-image1 {
            width: 100px;
            object-fit: cover;
          }
          .home-close-menu {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-icon3 {
            width: 24px;
            height: 24px;
          }
          .home-mid {
            flex: 0 0 auto;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text02 {
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text02:hover {
            color: var(--dl-color-turquoise-default);
          }
          .home-text03 {
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text03:hover {
            color: var(--dl-color-turquoise-default);
          }
          .home-text04 {
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text04:hover {
            color: var(--dl-color-turquoise-default);
          }
          .home-text05 {
            transition: 0.3s;
          }
          .home-text05:hover {
            color: var(--dl-color-turquoise-default);
          }
          .home-main {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-turquoise-cirble {
            top: 515px;
            right: 688px;
            width: 170px;
            filter: blur(60px);
            opacity: 0.6;
            position: absolute;
            object-fit: cover;
          }
          .home-purple-circle {
            top: -162px;
            right: -74px;
            width: 400px;
            filter: blur(60px);
            opacity: 0.4;
            position: absolute;
            object-fit: cover;
          }
          .home-left {
            top: 653px;
            left: 0px;
            right: auto;
            width: 420px;
            bottom: auto;
            position: absolute;
            object-fit: cover;
          }
          .home-right {
            top: 441px;
            left: auto;
            right: 0px;
            width: 612px;
            bottom: auto;
            position: absolute;
            object-fit: cover;
          }
          .home-hero {
            flex: 0 0 auto;
            width: 100%;
            height: 80vh;
            display: flex;
            padding: var(--dl-space-space-doubleunit);
            z-index: 100;
            max-width: 1110px;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-container02 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text06 {
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-doubleunit);
          }

          .home-text07 {
            color: #ffffff;
          }
          .home-text09 {
            color: #ffffff;
          }
          .home-text11 {
            color: #ffffff;
          }
          .home-text12 {
            color: #0498f7;
          }
          .home-link03 {
            display: contents;
          }
          .home-component {
            text-decoration: none;
          }
          .home-image2 {
            width: 399px;
            height: 513px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .home-features {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-doubleunit);
            z-index: 100;
            position: relative;
            max-width: 1110px;
            align-items: flex-start;
            padding-top: 63px;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text13 {
            color: #ffffff;
          }
          .home-text15 {
            color: #0498f7;
          }
          .home-text16 {
            max-width: 500px;
            align-self: flex-start;
            text-align: left;
            font-family: Arial;
          }
          .home-text17 {
            color: #ffffff;
            white-space: pre-wrap;
          }
          .home-text18 {
            color: #ffffff;
          }
          .home-features1 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: none;
            flex-wrap: wrap;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-container03 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: none;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-features2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-doubleunit);
            z-index: 100;
            max-width: 1110px;
            align-items: flex-end;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text19 {
            color: #ffffff;
          }
          .home-text21 {
            color: #f10404;
          }
          .home-text22 {
            color: #ffffff;
            max-width: 500px;
            align-self: flex-end;
            text-align: right;
            font-family: Arial;
          }
          .home-text23 {
            font-family: Arial;
          }
          .home-text24 {
            max-width: 500px;
            text-align: center;
          }
          .home-text25 {
            white-space: pre-wrap;
          }
          .home-container04 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: none;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-c-t-a {
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #f10404;
          }
          .home-container05 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-doubleunit);
            z-index: 100;
            flex-wrap: wrap;
            max-width: 1110px;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
            background-color: #0498f7;
          }
          .home-container06 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text27 {
            white-space: pre-wrap;
          }
          .home-text28 {
            color: #ffffff;
          }
          .home-text29 {
            max-width: 500px;
          }
          .home-link04 {
            color: #ffffff;
            max-width: 400px;
            margin-top: var(--dl-space-space-doubleunit);
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
            background-color: #f10404;
          }
          .home-text32 {
            white-space: pre-wrap;
          }
          .home-container07 {
            width: 520px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-image3 {
            top: -175px;
            left: 200px;
            width: 306px;
            height: 350px;
            position: absolute;
            box-shadow: 3px 3px 10px 0px #232323;
            object-fit: cover;
            border-color: var(--dl-color-gray-900);
            border-width: 0px;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .home-footer {
            flex: 0 0 auto;
            color: var(--dl-color-gray-white);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
            background-color: #191919;
          }
          .home-container08 {
            flex: 0 0 auto;
            width: 100%;
            height: 341px;
            display: flex;
            padding: var(--dl-space-space-doubleunit);
            z-index: 100;
            flex-wrap: wrap;
            max-width: 1110px;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-container09 {
            flex: 0 0 auto;
            width: auto;
            height: 72px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-image4 {
            width: 72px;
            height: 72px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .home-container10 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .home-text35 {
            color: #5865f2;
          }
          .home-container11 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .home-container12 {
            display: flex;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: center;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-link05 {
            transition: 0.3s;
            margin-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link05:hover {
            color: #f10405;
          }
          .home-link06 {
            transition: 0.3s;
            margin-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link06:hover {
            color: #f10405;
          }
          .home-link07 {
            transition: 0.3s;
            margin-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link07:hover {
            color: #f10405;
          }
          .home-link08 {
            transition: 0.3s;
            margin-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link08:hover {
            color: #f10405;
          }
          .home-link09 {
            transition: 0.3s;
            white-space: nowrap;
            text-decoration: none;
          }
          .home-link09:hover {
            color: #f10405;
          }
          .home-text36 {
            color: var(--dl-color-gray-300);
            align-self: center;
            margin-top: var(--dl-space-space-unit);
          }
          .home-divider {
            width: 100%;
            height: 1px;
            opacity: 0.2;
            background-color: var(--dl-color-gray-white);
          }
          @media (max-width: 1600px) {
            .home-mobile-menu {
              height: 892px;
              background-color: #191919;
            }
            .home-image1 {
              top: 81px;
              left: 0px;
              right: 0px;
              width: 108px;
              height: auto;
              margin: auto;
              position: absolute;
              align-self: center;
              box-shadow: 5px 5px 10px 0px #353434;
              padding-top: 0px;
              border-radius: var(--dl-radius-radius-radius6);
              padding-bottom: 0px;
            }
            .home-icon3 {
              fill: #fff;
            }
            .home-mid {
              height: 137px;
              align-self: center;
              border-width: 0px;
              border-radius: var(--dl-radius-radius-radius4);
            }
            .home-text02 {
              color: #ffffff;
              font-size: 25px;
              align-self: center;
            }
            .home-text03 {
              color: #ffffff;
              font-size: 25px;
              align-self: center;
            }
            .home-text04 {
              color: #ffffff;
              font-size: 25px;
              align-self: center;
            }
            .home-text05 {
              color: #ffffff;
              font-size: 25px;
              align-self: center;
            }
            .home-turquoise-cirble {
              left: 769px;
              bottom: 70px;
            }
            .home-image3 {
              height: 360px;
              box-shadow: 3px 3px 10px 0px #232323;
              border-width: 0px;
              border-radius: var(--dl-radius-radius-radius8);
            }
          }
          @media (max-width: 991px) {
            .home-container01 {
              display: none;
            }
            .home-hero {
              height: auto;
              flex-direction: column;
            }
            .home-container02 {
              align-items: center;
              margin-bottom: var(--dl-space-space-doubleunit);
            }
            .home-text06 {
              text-align: center;
            }
            .home-container07 {
              display: none;
            }
          }
          @media (max-width: 767px) {
            .home-menu {
              display: none;
            }
            .home-link02 {
              display: none;
            }
            .home-burger-menu {
              display: block;
            }
            .home-menu1 {
              fill: #ffffff;
            }
            .home-turquoise-cirble {
              display: none;
            }
            .home-text06 {
              font-size: 50px;
              text-align: center;
            }
            .home-text13 {
              font-size: 40px;
            }
            .home-text19 {
              font-size: 40px;
            }
            .home-text26 {
              font-size: 40px;
            }
            .home-container12 {
              flex-wrap: wrap;
              justify-content: center;
            }
            .home-text36 {
              margin-top: var(--dl-space-space-unit);
              text-align: center;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .home-container01 {
              display: none;
            }
            .home-menu1 {
              fill: #ffffff;
            }
            .home-turquoise-cirble {
              display: none;
            }
            .home-purple-circle {
              display: none;
            }
            .home-image2 {
              width: 300px;
              height: 384px;
            }
            .home-text13 {
              text-align: center;
            }
            .home-text16 {
              text-align: center;
            }
            .home-container03 {
              flex-direction: column;
            }
            .home-text19 {
              align-self: center;
              text-align: center;
            }
            .home-text22 {
              text-align: center;
            }
            .home-text24 {
              text-align: center;
            }
            .home-container04 {
              flex-direction: column;
            }
            .home-link04 {
              display: none;
            }
            .home-text36 {
              display: none;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
