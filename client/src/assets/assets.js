import amirhosein_imani from './Amirhosein-Imani.jpg'
import facebook_icon from './facebook_icon.svg'
import instagram_icon from './instagram_icon.svg'
import twitter_icon from './twitter_icon.svg'
import star_icon from './star_icon.svg'
import rating_star from './rating_star.svg'
import sample_img_1 from './sample_img_1.png'
import sample_img_2 from './sample_img_2.png'
import step_icon_1 from './step_icon_1.svg'
import step_icon_2 from './step_icon_2.svg'
import step_icon_3 from './step_icon_3.svg'
import email_icon from './email_icon.svg'
import lock_icon from './lock_icon.svg'
import cross_icon from './cross_icon.svg'
import star_group from './star_group.png'
import credit_star from './credit_star.svg'
import profile_icon from './profile_icon.png'

export const assets = {
    amirhosein_imani,
    facebook_icon,
    instagram_icon,
    twitter_icon,
    star_icon,
    rating_star,
    sample_img_1,
    sample_img_2,
    email_icon,
    lock_icon,
    cross_icon,
    star_group,
    credit_star,
    profile_icon
}

export const stepsData = [
    {
      title: 'آنچه در ذهن دارید را توصیف کنید',
      description: 'یک کلمه ، جمله و یا پاراگراف تایپ کنید تا نصویر موردنظر شما تولید شود.',
      icon: step_icon_1,
    },
    {
      title: 'جادو را تماشا کنید',
      description: 'هوش مصنوعی با در نظر گرفتن درخواست شما یک تصویر با کیفیت تولید میکند.',
      icon: step_icon_2,
    },
    {
      title: 'دانلود و به اشتراک گذاری',
      description: 'بعد تولید تصویر بلافاصله میتوانید تصویر را دانلود و آن را به اشتراک بگذارید.',
      icon: step_icon_3,
    },
  ];

export const testimonialsData = [
    {
        image:amirhosein_imani,
        name:'امیرحسین ایمانی',
        role:'برنامه نویس و توسعه دهنده وب',
        stars:5,
        text:`لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است.`
    },
    {
        image:amirhosein_imani,
        name:'امیرحسین ایمانی',
        role:'برنامه نویس و توسعه دهنده وب',
        stars:5,
        text:`لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است.`
    },
    {
        image:amirhosein_imani,
        name:'امیرحسین ایمانی',
        role:'برنامه نویس و توسعه دهنده وب',
        stars:5,
        text:`لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است.`
    },
]

export const plans = [
    {
      id: 'پایه',
      price: '۱۰',
      credits: '۱۰۰',
      desc: 'مناسب برای استفاده شخصی'
    },
    {
      id: 'پیشرفته',
      price: '۵۰',
      credits: '۵۰۰',
      desc: 'مناسب برای استفاده تجاری'
    },
    {
      id: 'سازمانی',
      price: '۲۵۰',
      credits: '۵۰۰۰',
      desc: 'مناسب برای استفاده سازمانی'
    },
  ]