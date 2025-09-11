import React, { useEffect, useRef, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Animated, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen";
import { useFonts } from "expo-font";
import colors from "../config/colors";
import { RootStackParamList } from "../../screens/type";
import { NavigationProp } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import CheckBox from 'react-native-check-box';
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import NavigationSlider from './ReusableComponents/NavigationSlider';
import MenuBar from "./ReusableComponents/MenuBar";

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const ProgressBar = ({ progress }: { progress: number }) => {
   return (
     <View style={styles.progressBarContainer}>
       <View style={[styles.progressBar, { width: `${progress}%` }]} />
     </View>
   );
 };

const Home = () => {
   const navigation = useNavigation<HomeScreenNavigationProp>();

   type IconItem = {
      label: string;
      image: any;
      route: keyof RootStackParamList;
   }

   const icons: IconItem[] = [
      { label: "Event", image: require("../../assets/EVENTICON.png"), route: "Event" },
      { label: "Checklist", image: require("../../assets/CHECKLISTICON.png"), route: "Checklist" },
      { label: "Schedule", image: require("../../assets/SCHEDULEICON.png"), route: "Schedule" },
      { label: "Budget", image: require("../../assets/BUDGETICON.png"), route: "Budget" },
      { label: "Guest", image: require("../../assets/GUESTICON.png"), route: "Guest" },
      { label: "Venue", image: require("../../assets/VENUEICON.png"), route: "Venue" },
      { label: "Gallery", image: require("../../assets/GALLERYICON.png"), route: "Gallery" },
      { label: "Account", image: require("../../assets/ACCOUNTICON.png"), route: "Account" },
   ];

   const [progress, setProgress] = useState(0);

   const [checkboxes, setcheckboxes] = useState({
      checklist1: false,
      checklist2: false,
      checklist3: false,
   });

   useEffect(() => {
      const checkedCount = Object.values(checkboxes).filter(checked => checked).length;
      const total = Object.keys(checkboxes).length;
      setProgress((checkedCount / total) * 100);
   }, [checkboxes]);

   const toggleCheckbox = (key: keyof typeof checkboxes) => {
      setcheckboxes(prev => ({
         ...prev,
         [key]: !prev[key]
      }));
   };

   return (
      <SafeAreaProvider>
         <SafeAreaView style={{ flex: 1 }}>
            <LinearGradient
               colors={["#FFFFFF", "#f2e8e2ff"]}
               style={{ flex: 1 }}
            >
            {/* HEADER */}
               <View>
                  <NavigationSlider headerTitle="Home" />
               </View>
            {/* HEADER */}
            {/* Main Content Container */}
            <View>  
               <ScrollView
                     contentContainerStyle={{ 
                        flexGrow: 1,
                        paddingBottom: hp("16%") 
                     }}
                     showsVerticalScrollIndicator={false}
                  >
                  {/* COUNTDOWN */}
                  <View style={{ alignItems: "center", justifyContent: "center", overflow: "hidden", position: "relative" }}>
                     <View style={{ alignItems: "center", justifyContent: "center", position: "relative" }}>
                        <Image
                           source={require("../../assets/WEDDINGIMG.png")}
                           style={{
                              width: wp("88%"),
                              height: wp("50%"),
                              marginTop: hp("2.5%"),
                              borderRadius: wp("2.5%"),
                           }}
                        />
                        <View style={styles.beforeImage}/>
                        <Text style={styles.overlayTextTop}>
                           Partner & Partner
                        </Text>
                        <View style={styles.overlayTextBottom}>
                           <Text style={styles.countdown}>12.</Text>
                           <Text style={styles.countdown}>02.</Text>
                           <Text style={styles.countdown}>19.</Text>
                           <Text style={styles.countdown}>56</Text>
                        </View>

                        <View
                           style={styles.overlayTextBottom2}>
                           <Text style={styles.countdownText}>Days</Text>
                           <Text style={styles.countdownText}>Hours</Text>
                           <Text style={styles.countdownText}>Mins</Text>
                           <Text style={styles.countdownText}>Secs</Text>
                        </View>

                        <View style={styles.overlayTextBottom3}>
                           <Text style={styles.countdownDate}>06/06/2025</Text>
                        </View>
                     </View>
                  </View>
                  {/* COUNTDOWN */}

                  {/* ICON SECTION */}
                  <LinearGradient
                     colors={["#FFFFFF", "rgba(240, 240, 240, 0.25)"]}
                     style={styles.iconSection}
                  >
                     <View style={styles.iconSectionContainer}>
                        {icons.map((item, index) => (
                           <TouchableOpacity
                              key={index}
                              style={styles.iconItem}
                              onPress={() => navigation.navigate(icons[index].route as never)}
                           >
                              <Image style={styles.icon} source={item.image} />
                              <Text style={styles.iconLabel}>{item.label}</Text>
                           </TouchableOpacity>
                        ))}
                     </View>
                  </LinearGradient>
                  {/* ICON SECTION */}

                  {/* EVENT TYPE & DATE */}
                  <View style={styles.eventType}>
                     <View>
                        <Image
                           source={require('../../assets/HEART.png')}
                           style={styles.eventImage}
                        />
                     </View> 
                     <View>
                        <Text style={{ fontSize: wp("4%"), width: wp("100%") }}>Intimate Wedding</Text>  
                        <Text style={{ fontSize: wp("3.2%") }}>Partner & Partner</Text>    
                     </View>
                     <View style={styles.eventDate}>
                        <Text style={{ fontSize: wp("3.2%") }}>16/06/2025</Text>
                     </View>
                  </View>
                  {/* EVENT TYPE & DATE */}

                  {/* CHECKLIST */}
                  <View style={styles.checkList}>
                     <View style={styles.checkListContainer}>
                        <Text style={styles.checkListText}>Checklist</Text>
                        <TouchableOpacity style={styles.viewAll}>
                           <Text style={styles.viewAllText}>View All</Text>
                           <FontAwesomeIcon
                              icon={faChevronRight}
                              size={12}
                              color="#343131"
                           />
                        </TouchableOpacity>
                     </View>
                     <View style={styles.checkListLine}></View>

                     <View style={styles.checkListItems}>
                        <CheckBox
                           style={{ padding: 5 }}
                           onClick={() => toggleCheckbox("checklist1")}
                           rightText="Set a budget"
                           isChecked={checkboxes.checklist1}
                           checkedImage={
                              <View style={styles.radioChecked}>
                                 <View style={styles.innerCheckedRadio}>
                                    <FontAwesomeIcon 
                                       icon={faCheck} 
                                       size={12} 
                                       color="#102E50" 
                                    />
                                 </View>
                              </View>
                           }
                           unCheckedImage={<View style={styles.radioUnchecked} />}
                        />
                        <CheckBox
                           style={{ padding: 5 }}
                           onClick={() => toggleCheckbox("checklist2")}
                           rightText="Add event time frame"
                           isChecked={checkboxes.checklist2}
                           checkedImage={
                              <View style={styles.radioChecked}>
                                 <View style={styles.innerCheckedRadio}>
                                    <FontAwesomeIcon 
                                       icon={faCheck} 
                                       size={12}
                                       color="#102E50" 
                                    />
                                 </View>
                              </View>
                           }
                           unCheckedImage={<View style={styles.radioUnchecked} />}
                        />
                        <CheckBox
                           style={{ padding: 5 }}
                           onClick={() => toggleCheckbox("checklist3")}
                           rightText="Set your wedding date"
                           isChecked={checkboxes.checklist3}
                           checkedImage={
                              <View style={styles.radioChecked}>
                                 <View style={styles.innerCheckedRadio}>
                                    <FontAwesomeIcon 
                                       icon={faCheck} 
                                       size={12} 
                                       color="#102E50" 
                                    />
                                 </View>
                              </View>
                           }
                           unCheckedImage={<View style={styles.radioUnchecked} />}
                        />
                        <ProgressBar progress={progress} />
                        <Text style={styles.progressText}>{Math.round(progress)}% Completed</Text>
                     </View>
                  </View>
                  {/* CHECKLIST */}
               </ScrollView>
            </View>
            </LinearGradient>
            <View>
               <MenuBar activeScreen="Home"/>
            </View>
         </SafeAreaView>
      </SafeAreaProvider>
   );
};

const styles = StyleSheet.create({
   radioUnchecked: {
      borderWidth: 2,
      width: 24,                      // same width & height
      height: 24,
      borderRadius: 12,               // half of width/height = circle
      borderColor: colors.button,
      alignItems: "center",
      justifyContent: "center",
   },

   radioChecked: {
      width: 24,
      height: 24,
      borderWidth: 2,
      borderRadius: 12,               // circle
      borderColor: colors.button,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "transparent",
   },

   innerCheckedRadio: {
      alignSelf: "center",
   },

   progressBarContainer: {
      width: wp("80%"),
      height: hp("1.5%"),
      alignSelf: "center",
      marginTop: hp("0.8%"),  
      borderRadius: wp("5%"),
      backgroundColor: colors.border,
   },

   progressBar: {
      height: hp("1.5%"),
      borderRadius: wp("5%"),
      backgroundColor: '#4CAF50',
   },

   progressText: {
      color: colors.black,
      marginTop: hp("0.8%"),
      paddingHorizontal: wp("1.5%"),
   },
  
   checkListItems: {
      paddingHorizontal: wp("1%"),
   },

   checkList: {
      padding: wp("1.5%"),
      marginTop: hp("1.5%"),
      borderRadius: wp("2.5%"),
      paddingBottom: hp("1.5%"),
      marginHorizontal: wp("6%"),
      backgroundColor: colors.white,
   },

   checkListContainer: {
      padding: wp("2%"),
      flexDirection: "row",
      justifyContent: "space-between",
   },

   checkListText: {
      fontWeight: "600",
      fontSize: wp("4.2%"), 
   },

   viewAll: {
      alignItems: "center",
      flexDirection: "row",
   },

   viewAllText: {
      marginRight: wp("1%"),
      fontSize: wp("3.6%"),
   },

   checkListLine: {
      width: wp("82%"),
      height: hp("0.1%"),
      alignSelf: "center",
      marginVertical: hp("0.8%"),
      backgroundColor: colors.borderv3,
   },

   eventType: {
      gap: wp("3%"),
      marginTop: hp("1.5%"),
      flexDirection: "row",
      alignItems: "center",
      borderRadius: wp("2.5%"),  
      marginHorizontal: wp("6%"),
      paddingHorizontal: wp("5%"),   
      backgroundColor: colors.white,
   },

   eventImage: {
      width: wp("8.5%"),
      height: hp("8.5%"),
      objectFit: "contain",
      borderRadius: wp("50%"),
   },

   eventDate: {
      right: 15,
      bottom: 12,
      position: "absolute",
   },

   navigationContainer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 10,
      width: wp("100%"),
      padding: wp("2.2%"),
      flexDirection: "row",
      paddingBottom: hp("1.5%"),
      backgroundColor: colors.white,
      justifyContent: "space-around",
   },

   navigation: {
      alignItems: "center",
   },

   navigationLine: {
      top: -10,
      zIndex: 1,
      left: "50%",
      height: "6%",
      width: wp("12%"),
      position: "absolute",
      borderRadius: wp("2.5%"),
      backgroundColor: colors.black,
      transform: [{ translateX: -wp("6%") }],
   },

   inactiveText: {
      color: "gray",
      fontSize: wp("3%"),
      marginTop: hp("0.5%"),
   },

   activeText: {
      fontSize: wp("3%"),
      marginTop: hp("0.5%"),
   },

   beforeImage: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: "88%",
      marginTop: hp("2.5%"),
      borderRadius: wp("2.5%"),
      backgroundColor: "rgba(0, 0, 0, 0.35)",
   },

   overlayTextTop: {
      zIndex: 2,
      color: "white",
      top: wp("10%"),
      fontWeight: "400",
      fontSize: wp("5.5%"),
      position: "absolute",
      alignSelf: "center",
   },

   overlayTextBottom: {
      gap: 20,
      zIndex: 12,
      marginTop: -hp("1%"),
      flexDirection: "row",
      position: "absolute",
      justifyContent: "space-between",
   },

   overlayTextBottom2: {
      gap: 20,
      zIndex: 12,
      marginTop: hp("6%"),
      flexDirection: "row",
      position: "absolute",
      justifyContent: "space-between",
   },

   overlayTextBottom3: {
      gap: 20,
      zIndex: 12,
      marginTop: hp("18%"),
      flexDirection: "row",
      position: "absolute",
      justifyContent: "space-between",
   },

   countdown: {
      color: "white",
      fontSize: wp("8%"),
   },

   countdownText: {
      color: "white",
      fontSize: wp("4.5%"),
   },

   countdownDate: {
      color: "white",
      textShadowRadius: 1,
      fontSize: wp("4.5%"),
      fontFamily: "Poppins",
   },

   headerText: {
      fontSize: wp("4.5%"),
   },

   burgerIcon: {
      width: wp("6%"),
      height: wp("6%"),
   },

   closeButton: {
      gap: 12,
      flexDirection: "row",
      alignItems: "center",
      marginTop: hp("2.5%"),
      marginLeft: wp("6%"),
   },

   sidebarContainer: {
      flex: 1,
      zIndex: 1000,
   },

   menuIndicatorActive: {
      width: wp("70%"),
      height: hp("7%"),  
      alignSelf: "center",
      padding: wp("2.5%"),
      borderRadius: wp("2%"),
      justifyContent: "center",
      backgroundColor: colors.borderv2,
   },

   menuIndicatorInactive: {
      padding: wp("2.5%"),
      justifyContent: "center",
      marginLeft: wp("4.5%"),
      marginTop: hp("0.5%"),
   },

   menuHeader: {
      marginLeft: wp("6%"),
      marginBottom: hp("2%"),
      fontSize: wp("4.5%"),
   },

   accMenuHeader: {
      marginLeft: wp("6%"),
      marginBottom: hp("1%"),
      fontSize: wp("4.5%"),
   },

   sidebarLine: {
      width: wp("68%"),
      alignSelf: "center",
      borderBottomWidth: 1,
      borderColor: "rgba(0, 0, 0, 0.2)",
   },

   sidebarContent: {
      zIndex: 1001,
      marginTop: hp("2.5%"),
   },

   sidebarMenu: {
      marginTop: hp("2.5%"),
      marginBottom: hp("2.5%"),
   },

   menuItem: {
      marginLeft: wp("2%"),
   },

   menuText: {
      fontSize: wp("4%"),
   },

   menuSubItem: {
      gap: 12,
      flexDirection: "row",
      alignItems: "center",
   },

   menuIcon: {
      objectFit: "contain",
      width: wp("6%"),
      height: wp("6%"),
   },

   profilePic: {
      width: wp("11%"),
      height: wp("11%"),
      objectFit: "contain",
   },

   profileName: {
      fontSize: wp("4%"),
      fontWeight: "600",
   },

   profileEmail: {
      width: wp("45%"),
      fontSize: wp("3.2%"),
   },

   iconSection: {
      width: wp("88%"),  
      alignSelf: "center",
      marginTop: hp("1.5%"),
      paddingHorizontal: wp("2%"),
      borderRadius: wp("2.5%"),   
      borderWidth: 1,
      borderColor: colors.border,
      // iOS
      shadowColor: 'rgba(216, 197, 170, 0.25)',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.25,
      shadowRadius: 10,
      // Android
      elevation: 10,  
   },

   iconSectionContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
   },

   iconItem: {
      width: "25%",
      alignItems: "center",
      marginVertical: hp("1.5%"),
   },

   icon: {
      width: wp("10%"),
      height: wp("10%"),
      resizeMode: "contain",
      marginBottom: 5,
      objectFit: "contain",
   },

   iconLabel: {
      width: wp("100%"),
      fontSize: wp("3%"),
      textAlign: "center",
   },

   Svg: {
      marginBottom: 5,
      objectFit: "contain",
      resizeMode: "contain",
   }
});

export default Home;