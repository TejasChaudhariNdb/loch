import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Inter"
          rel="stylesheet"
        />
      </Head>

      <main className="container">
        <div className="screen left">
          
        </div>

        <div className="screen right">
          <div className="right_container">
            <h1 className="signup_heading">Sign up for exclusive access</h1>
            <div>
              <input
                type="text"
                placeholder="Your email address"
                class="email_input"
              />
            </div>

            <div>
              <button className="get_started">Get started</button>
            </div>
            <div className="email_info">
              <p className="email_info_text">
                You’ll receive an email with an invite link to join.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}