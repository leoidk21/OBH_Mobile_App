// src/screens/getstarted/GetStartedScreen.tsx
import React, { useRef, useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import PagerView from 'react-native-pager-view';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../config/colors';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../screens/type';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useFonts } from 'expo-font';

const pages = [
  {
    key: 'welcome',
    title: 'Welcome!',
    subtitle: 'Celebrate Your Big\nDay With Us!',
    description: 'Turning events into unforgettable\nsymphonies, orchestrated by passion\nand guided by divine inspiration.',
    image: require('../../assets/StartedIllustration.png'),
  },
  {
    key: 'wedding',
    title: 'Weddings',
    subtitle: 'Plan Your Dream\nWedding with us',
    description: 'Planning to tie the knot this year and want\nto eliminate the stress? Book us as your\nwedding coordinator!',
    image: require('../../assets/WeddingIllustration.png'),
  },
  {
    key: 'debut',
    title: 'Debut',
    subtitle: 'Celebrate eighteen with\nStyle and Grace',
    description: 'Celebrate your 18th with a dream\ncelebration — we’ll take care of\nthe rest!',
    image: require('../../assets/DebutIllustration.png'),
  },
  {
    key: 'parties',
    title: 'Parties',
    subtitle: 'Every Celebration\nPerfectly Managed',
    description: 'Throwing a party but don’t know where to\nstart? Leave the planning to us and enjoy \nevery moment!',
    image: require('../../assets/PartiesIllustration.png'),
  },
];

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Loading'>;

export default function GetStartedScreen() {
  const [fontsLoaded] = useFonts({
    'Sarasvati': require('../../assets/fonts/Sarasvati-9Y4w5.ttf'),
    'Tan-Pearl': require('../../assets/fonts/tan-pearl.otf'),
    'GreatVibes': require('../../assets/fonts/GreatVibes-Regular.ttf'),
    'Hvd': require('../../assets/fonts/HvDTrial_Brandon_Grotesque_light-BF64a625c93e709.otf'),
    'BIZ': require('../../assets/fonts/BIZUDPMincho-Regular.ttf'),
    'Poppins': require('../../assets/fonts/Poppins-Regular.ttf'),
    'Loviena': require('../../assets/fonts/lovienapersonaluseonlyregular-yy4pq.ttf'),
    'Canela': require('../../assets/fonts/CanelaCondensed-Regular-Trial.otf'),
    'Senbatsu': require('../../assets/fonts/Senbatsu.otf'),
    'Velista': require('../../assets/fonts/VELISTA.ttf'),
  });

  const insets = useSafeAreaInsets();
  const pagerRef = useRef<PagerView>(null);
  const [pageIndex, setPageIndex] = useState(0);
  
  const onPageSelected = (e: { nativeEvent: { position: number } }) => {
    setPageIndex(e.nativeEvent.position);
  };``
  
  const navigation = useNavigation<NavigationProp>();
    
  const getStartedBtnStyle = {
    width: wp(74),
    borderRadius: wp(10),
    paddingVertical: hp(1.7),
  };

  const LoginButtonStyle = {
    width: wp(74),
    marginTop: hp(1.5),
    borderRadius: wp(10),
    paddingVertical: hp(1.7),
  };

  return (
      <SafeAreaView style={{ flex: 1 }}>
        <LinearGradient
          colors={["#FFF8E7", "#FAF3E0", "#FFF4F0"]}
          start={[0, 0]}
          end={[0, 1]}
          style={styles.container}
        >
          <View
            style={{
              right: 0,
              position: "absolute",
            }}
          >
            <Image
              source={require("../../assets/TOP.png")}
              style={[
                {
                  width: wp("70%"),
                  height: wp("70%"),
                },
              ]}
            />
          </View>
          {/* Swipeable Content */}
          <View style={styles.pagerContainer}>
            <PagerView
              ref={pagerRef}
              style={styles.pager}
              initialPage={0}
              onPageSelected={onPageSelected}
            >
              {pages.map((page) => (
                <View key={page.key} style={styles.page}>
                  <Text style={styles.title}>{page.title}</Text>
                  <Image
                    source={page.image}
                    style={styles.image}
                    resizeMode="contain"
                  />
                  <Text style={styles.subtitle}>{page.subtitle}</Text>
                  <Text style={styles.description}>{page.description}</Text>
                </View>
              ))}
            </PagerView>
          </View>
          {/* pagerContainer */}

          {/* Fixed Content */}
          <View
            style={[styles.fixedBottom, { paddingBottom: insets.bottom + 12, zIndex: 2}]}
          >
            {/* Dot Indicator */}
            <View style={styles.indicatorContainer}>
              {pages.map((_, i) => (
                <View
                  key={i}
                  style={[
                    styles.dot,
                    pageIndex === i ? styles.activeDot : styles.inactiveDot,
                  ]}
                />
              ))}
            </View>

            {/* Buttons */}
            <View style={styles.buttonContainer}>
              <LinearGradient
                colors={["#19579C", "#102E50"]}
                start={{ x: 1, y: 0.5 }}
                end={{ x: 0, y: 0.5 }}
                style={getStartedBtnStyle}
              >
                <TouchableOpacity
                  onPress={() => navigation.navigate("SignUp")}
                  activeOpacity={0.7}
                >
                  <Text style={styles.getBtnText}>GET STARTED</Text>
                </TouchableOpacity>
              </LinearGradient>
              <TouchableOpacity
                style={[styles.LoginBtn, LoginButtonStyle]}
                onPress={() => navigation.navigate("SignIn")}
                activeOpacity={0.7}
              >
                <Text style={styles.loginBtnText}>LOGIN</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              bottom: 0,
              left: 0,
              position: "absolute",
            }}
          >
            <Image
              source={require("../../assets/BOT.png")}
              style={[
                {
                  width: wp("70%"),
                  height: wp("70%"),
                },
              ]}
            />
          </View>
        </LinearGradient>
      </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  pagerContainer: {
    flex: 1,
    zIndex: 1,
  },

  pager: {
    flex: 1,
  },

  page: {
    alignItems: "center",
    marginTop: hp("4%"),
    position: "relative",
  },

  before: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
    backgroundColor: 'red',
  },

  title: {
    color: colors.brown,
    fontWeight: "heavy",
    fontSize: hp("3.8%"),
    fontFamily: 'Velista',
    marginBottom: hp("1.2%"),
    width: wp("100%"),
    textAlign: "center",
  },

  image: {
    width: wp("80%"), 
    height: hp("30%"),
    marginTop: hp("3%"),
    marginBottom: hp("2%"),
  },

  subtitle: {
    padding: hp("1%"),
    fontSize: hp("3%"),
    textAlign: "center",
    color: colors.brown,
    marginTop: hp("3%"),
    lineHeight: hp("4.5%"),
    fontFamily: 'Senbatsu',
    width: wp("100%"),
    letterSpacing: hp("0.2%"),
  },

  description: {
    color: colors.black,
    textAlign: "center",
    fontSize: hp("1.7%"),
    marginTop: hp("1.6%"),
    fontFamily: 'Poppins',
    lineHeight: hp("2.6%"),
  },

  fixedBottom: {
    alignItems: "center",
    justifyContent: "flex-end",
  },

  indicatorContainer: {
    flexDirection: "row",
    marginBottom: hp("4.6%"),
  },

  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 4,
  },

  activeDot: {
    width: 16,
    backgroundColor: colors.indicator,
  },

  inactiveDot: {
    backgroundColor: colors.indicatorBlank,
  },

  buttonContainer: {
    alignItems: "center",
  },

  getStartedButton: {
    elevation: 1,
    borderWidth: 1,
    shadowOpacity: 0.25,
    borderColor: colors.border,
    shadowColor: "#222020ff",
    backgroundColor: colors.secondary,
    shadowOffset: { width: 1, height: 1 },
  },

  getBtnText: {
    fontSize: 14,
    color: colors.white,
    textAlign: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: hp("2.2%"),
  },

  LoginBtn: {
    elevation: 1,
    borderWidth: 1,
    shadowRadius: 4,
    shadowOpacity: 0.25,
    shadowColor: "#000000",
    borderColor: colors.border,
    backgroundColor: colors.secondary,
    shadowOffset: { width: 0.5, height: 1 },
  },

  loginBtnText: {
    fontSize: 14,
    textAlign: "center",
  },

});