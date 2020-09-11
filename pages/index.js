import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div id="portrait-div">
      <img class="portrait" src="DSC_0018.jpg" />
      <p class="name">NEHEMIAH WILSON</p>
      <a class="nav" href="posts/about-me">about me</a>
      <a class="nav" href="posts/design">design</a>
      <a class="nav" href="posts/photography">photography</a>
    </div>
  )
}
