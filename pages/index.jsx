import React from "react";
import Link from "next/link";
import Head from "next/head";
import axios from "axios";

import PrimaryButton from "./components/primary-button";
import FeatureCard from './components/feature-card'

    const api = "https://developersdungeon.xyz/assets/json/servers.json"

    axios.get(api)
    .then(res => { console.log(res)
    }).catch(error => console.log(error))

const Home = (props, res) => {

  return (
    <>
      <div className="home-container">
        <Head>
          <title>Would You | Discord Bot</title>
          <link rel="icon" type="image/x-icon" href="/static/favicon.ico"></link>
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
                <picture>
                  <img
                    alt="image"
                    src="/assets/logo-200h.png"
                    className="home-image"
                  />
                 </picture>
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
              <picture>
                <img
                  alt="image"
                  src="/assets/logo-200h.png"
                  className="home-image1"
                />
                </picture>
              </div>
              <div data-type="CloseMobileMenu" className="home-close-menu">
                <svg viewBox="0 0 1024 1024" className="home-icon3">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="home-mid"></div>
            <a className="home-text02" href="#features">
              Features
            </a>
            <a className="home-text03" href="#stats">
              Stats
            </a>
            <a
              className="home-text04"
              href="https://top.gg/bot/981649513427111957/vote"
            >
              Vote
            </a>
            <a
              className="home-text05"
              href="https://discord.com/oauth2/authorize?client_id=981649513427111957&permissions=274878294080&scope=bot%20applications.commands"
            >
              Invite
            </a>
          </div>
        </div>
        <div className="home-main">
        <picture>
          <img
            alt="image"
            src="/assets/turquoise-circle1.svg"
            className="home-turquoise-cirble"
          />
          <img
            alt="image"
            src="/assets/purple-circle1.svg"
            loading="eager"
            className="home-purple-circle"
          />
          <img
            alt="image"
            src="/assets/left-500w.png"
            className="home-left"
          />
          <img
            alt="image"
            src="/assets/right-700w.png"
            className="home-right"
          />
        </picture>
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
            <picture>
            <img
              alt="image"
              src="/assets/wouldyou1.svg"
              className="home-image2"
            />
           </picture>
          </div>
        </div>
        <div className="home-features">
          <h2 id="features" className="home-text13 headline2">
            <span>Our Features</span>
            <span className="home-text15">.</span>
          </h2>
          <span className="home-text16">
            <span className="home-text17">
              Would You provides a bunch of features right out of the box such
              as the ones given below!
            </span>
            <span className="home-text18"></span>
          </span>
          <div className="home-features1">
            <FeatureCard
              title="24/7 Uptime"
              image_src="/assets/up-time.svg"
            ></FeatureCard>
            <FeatureCard
              title="Open Source"
              image_src="/assets/github.svg"
            ></FeatureCard>
            <FeatureCard
              title="Multiple Language Support"
              image_src="/assets/language.svg"
            ></FeatureCard>
          </div>
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
          <div className="home-features1">

        <FeatureCard
            title={res.data.wouldyou.servers + "+" + " " + "Global Servers"}
            image_src="/assets/server.svg"
          ></FeatureCard>
          <FeatureCard
            title={res.data.wouldyou.users + "+" + " " + "Active Users"}
            image_src="/assets/user.svg"
          ></FeatureCard>
          <FeatureCard
            title="5/5 Star Rating"
            image_src="/assets/star.svg"
          ></FeatureCard>
          </div>
        </div>
        <div className="home-c-t-a">
          <div className="home-container05">
            <div className="home-container06">
              <h2 className="headline2 home-text26">
                <span className="home-text27">
                  Keep Your Server Active -
                  <span
                    dangerouslySetInnerHTML={{
                      __html: " ",
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
              ></a>
            </div>
            <div className="home-container07">
            <picture>
              <img
                alt="image"
                src="/assets/my%20insights.svg"
                loading="eager"
                className="home-image3"
              />
            </picture>
            </div>
          </div>
        </div>
        <div className="home-footer">
          <footer className="home-container08">
            <div className="home-container09">
            <picture>
              <img
                alt="image"
                src="/assets/logo-200h.png"
                className="home-image4"
              />
            </picture>
            </div>
            <div className="home-container10">
              <span>
                <span>
                  Verified by
                  <span
                    dangerouslySetInnerHTML={{
                      __html: " ",
                    }}
                  />
                </span>
                <a
                  className="home-text35"
                  href="https://support.discord.com/hc/en-us/articles/360040720412-Bot-Verification-and-Data-Whitelisting#h_46b3869c-6d50-43fc-b07c-9ed7569a1160"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Discord
                </a>
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
            <div className="home-divider"></div>
            <span className="home-text36 body2">
              © 2022 Developers Dungeon. Would You is not affiliated with
              Discord!
            </span>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Home;