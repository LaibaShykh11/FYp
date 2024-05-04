import FacebookImg from '../src/assets/img/facebook.svg'
import GoogleImg from '../src/assets/img/google.svg'
import CocaColaImg from '../src/assets/img/coca-cola.svg'
import LinkedInImg from '../src/assets/img/linkedin.svg'
import SamsungImg from '../src/assets/img/samsung.svg'
import Feature1Img from '../src/assets/img/Feature1Img.jpeg'
import Feature2Img from '../src/assets/img/Feature2Img.png'
import Feature3Img from '../src/assets/img/FeatureImg3.jpeg'
import Feature4Img from '../src/assets/img/Feature4Img.jpeg'
import Feature5Img from '../src/assets/img/Feature5Img.jpeg'
import mainInterface from '../src/assets/img/mainInterface.jpeg'

export const header = {
  btnText1: 'New File',
  btnText2: 'Login',
}

export const nav = [
  { name: 'Home', href: '/' },
  { name: 'Features', href: '/' },
  { name: 'FAQ', href: '/' },
  { name: 'Contact', href: '/' },
]

export const hero = {
  title: 'Share code with developers',
  subtitle:
    'CodeCollab is a collaborative online code editor for technical interviews, pair programming, teaching... you name it.',
  btnText: 'New File',
  compText: 'No sign up. Free. Forever ❤️',
}

export const overview = {
  brands: [
    {
      image: FacebookImg,
      delay: 300,
    },
    {
      image: GoogleImg,
      delay: 400,
    },
    {
      image: CocaColaImg,
      delay: 500,
    },
    {
      image: LinkedInImg,
      delay: 600,
    },
    {
      image: SamsungImg,
      delay: 700,
    },
  ],
}

export const features = {
  feature1: {
    title: 'The collaborative online code editor.',
    subtitle:
      'Create, share and edit code snippets in real-time together with other developers',
    image: Feature1Img,
  },
  feature2: {
    title: 'Real-time collaboration.',
    subtitle:
      'Edit code and see updates while collaborating with other users in real-time.',
    image: Feature2Img,
  },
  feature3: {
    title: 'Share the link to invite people.',
    subtitle:
      'Share the file link with your colleague to start editing it together.',
    image: Feature3Img,
  },
  feature4: {
    title: 'Add/Remove Participants.',
    subtitle: 'The Host can Add or Remove the Participants.',
    image: Feature4Img,
  },
  feature5: {
    title: 'Real Time Chatting.',
    subtitle: 'You can chat with other participants at the real time.',
    image: Feature5Img,
  },
  mainInterface: {
    title: 'CodeCollab Interface',
    subtitle: 'Real Time Collaboration Platform',
    image: mainInterface,
  },
}
