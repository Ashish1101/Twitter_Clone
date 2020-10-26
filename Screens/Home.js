import React from 'react'
import {View , Text , Button , TouchableOpacity , FlatList} from 'react-native'
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import CommonScreen from './CommonScreen'
import TweetCard from '../components/TweetCard'

const Tab = createMaterialBottomTabNavigator()

const firstImage = "https://instagram.fdel25-1.fna.fbcdn.net/v/t51.2885-15/e35/80595297_230284261301232_3153843477769450931_n.jpg?_nc_ht=instagram.fdel25-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=7wXPd18yLsEAX_7lCrK&se=7&_nc_tp=18&oh=f4aad0508b8a91d8bc25f37ce33189ab&oe=5FBE0F75"
const secondImage = "https://instagram.fdel25-1.fna.fbcdn.net/v/t51.2885-15/e35/79771520_2494737374127968_8476351914945403356_n.jpg?_nc_ht=instagram.fdel25-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=o7o1pULNu0YAX9Bv_Xl&se=7&_nc_tp=18&oh=5c06e922813a0da3858b34b99f589715&oe=5FBFADCA"
const thirdImage = "https://instagram.fdel25-1.fna.fbcdn.net/v/t51.2885-15/e35/31905529_566796847038751_2483872508894248960_n.jpg?_nc_ht=instagram.fdel25-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=mx_cHIq5GCcAX-IpdR3&_nc_tp=18&oh=28b92d80d7ac27f325a97b4f58e88c1e&oe=5FC0760A"
const fourthImage = "https://instagram.fdel25-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/118515179_166529995003334_5629804612136756848_n.jpg?_nc_ht=instagram.fdel25-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=mr_l0wO2Rq4AX8vs2FO&_nc_tp=15&oh=4cc26520c08abae30f62777e62189f70&oe=5FBDFEDA"

const arr = [<TweetCard 
    imageUrl={firstImage}
     baseImage={thirdImage}
     name="ashish"
     handle="@ashishshakya98"
     comments={17}
     likes={61}
     retweet={100}
     verified={false}
    /> , 
    <TweetCard 
    imageUrl={secondImage}
     baseImage={firstImage}
     name="coderGuy"
     handle="@Coderguy98" 
     comments={30}
     likes={91}
     retweet={105}
     verified={true}
     /> 
    , <TweetCard 
    imageUrl={thirdImage} 
    baseImage={secondImage}
    name="Decoder"
    handle="@Decoder11" 
    comments={34}
    likes={109}
    retweet={150}
    verified={true}
     />,
     <TweetCard 
    imageUrl={firstImage}
     baseImage={fourthImage}
     name="Abhidhek"
     handle="@abhishek20.23"
     comments={51}
     likes={201}
     retweet={31}
     verified={false}
    />
    ]

const Home = ({navigation}) => {
    return (
        <View style={{flex:1}}>
            <View style={{flex:1}}>
              <FlatList
              data={arr}
               renderItem={({item}) => (<View>{item}</View>)}
              keyExtractor={() => Math.random(10).toString()}
               />
            </View>
            <CommonScreen />
        </View>
    )
}

export default Home
