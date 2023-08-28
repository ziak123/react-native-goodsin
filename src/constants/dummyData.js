import ShieldIcon from "../assets/svg/privacysheildicon";
import { appImages } from "../utilities/assets";
import { SCREEN } from "./screens";

export const ActivitiesDataContainer = [
    {
        id: 1,
        item: "Check In Delivery",
        time:"02.08.2023 09:00",
        SCREEN:SCREEN.checkindelivery
    },
    {
        id: 2,
        item: "Add Supplier",
        time:"02.08.2023 09:00",
        
    },
    {
        id: 3,
        item: "Add Plant No",
        time:"02.08.2023 09:00"
    },
    {
        id: 4,
        item: "Add Country Or Origin",
        time:"02.08.2023 09:00",
        SCREEN:SCREEN.addcountryorigin
    },
    {
        id: 5,
        item: "Add Category",
        time:"02.08.2023 09:00"
    }
]
export const Data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
  ];

  export const CountryName = [
    { label: 'Pak', value: '1' },
    { label: 'India', value: '2' },
    { label: 'Japa', value: '3' },
    { label: 'South', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
  ];
  export const DeliveryCardDetailList= {
    category:"category name here",
    supplier:"supplier name here",
    slaughterPlantNo:'1144',
    processedPlantNo:'1233',
    countryOrigin:'pak',
    batchcode:'99',
    date:"05 Au 2024",
    temperature:'10 C',
    signofContaminationorDamage :'No'

  }

  export const SettingDataContainer=[
    {
        id:1,
        item:'Profile',
        iconName:'account-outline',
        iconType:'material-community',
        screen:SCREEN.profile
    },
    {
        id:1,
        item:'Change Password',
        iconName:'account-key-outline',
        iconType:'material-community',
        screen:SCREEN.authStack
    },
    {
        id:1,
        item:'Subsription Detail',
        iconName:'crown-outline',
        iconType:'material-community',
        screen:SCREEN.authStack
    },
    {
        id:1,
        item:'Term of Usage',
        iconName:'document-text-outline',
        iconType:'ionicon',
        screen:SCREEN.termofusage
    },
    {
        id:1,
        item:'Privacy Policy',
        iconName:'shield-checkmark-outline',
        iconType:'ionicon',
        screen:SCREEN.privacypolicy
    },
    {
        id:1,
        item:'About App',
        iconName:'exclamation',
        iconType:'evilicon',
        screen:SCREEN.aboutapp
    },
    {
        id:1,
        item:'Help Center',
        iconName:'help-circle-outline',
        iconType:'ionicon',
        screen:SCREEN.helpcenter,
        
    },
    {
        id:1,
        item:'Log Out',
        iconName:'log-in-outline',
        iconType:'ionicon',
        screen:SCREEN.authStack
    },
  ]

  export const ProfileDetail={
    companyname:"Abc Company",
   email:'johnmitchell@gmail.com'
  } 

  export const SubscriptionCardDetail=[
    {
        id:1,
        money:"99.9$/Month",
        trial:"Get 7 free days of trial"
    },
{
    id:2,
    money:"89.99$/year",
    trial:"7.99$/Month.Billed annually",
},
{
    id:3,
    money:"200$/Lifetime Access",
    trial:'Pay once and dont worry ever'
}]

export const PaymentCardContainer= [
    {
        id:1,
        title:"Credit Card",
        img:appImages.card
    },
    {
        id:2,
        title:"Credit Card",
        img:appImages.card
    },
    {
        id:3,
        title:'Apple Pay',
        img:appImages.app
    },
    {
        id:4,
        title:'Google Pay',
        img:appImages.g
    }
]

export const FaqCardData= [
    {
        id:1,
        title:'Lorem Ipsum is simply dummy...',
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled."
    },
    {
        id:2,
        title:'Lorem Ipsum is simply dummy...',
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled."
    },
    {
        id:3,
        title:'Lorem Ipsum is simply dummy...',
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled."
    },
    {
        id:4,
        title:'Lorem Ipsum is simply dummy...',
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled."
    },
    {
        id:5,
        title:'Lorem Ipsum is simply dummy...',
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled."
    },
    {
        id:6,
        title:'Lorem Ipsum is simply dummy...',
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled."
    },
    {
        id:7,
        title:'Lorem Ipsum is simply dummy...',
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled."
    },
    {
        id:8,
        title:'Lorem Ipsum is simply dummy...',
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled."
    },
    {
        id:9,
        title:'Lorem Ipsum is simply dummy...',
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled."
    }
]
export const RoutTitle=[
    { key: 'first', title: 'FAQ' },
    { key: 'second', title: 'Contact us' },
  ]
  export const ProdDescription={
    des:"Lorem ipsum dolor sit amet consectetur. Pulvinar nisl amet amet ultrices mi mi. Posuere posuere.Lorem ipsum dolor sit amet consectetur. Pulvinar nisl amet amet ultrices mi mi. Posuere posuere."
  }