import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  FlatList,
  StyleSheet,
  Dimensions,
} from "react-native";
import React, { useState, useRef } from "react";
import { TouchableOpacity } from "react-native";
import Images from "../../constants/Images";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";

const Home = () => {
  const { width, height } = Dimensions.get("screen");
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const flatListRef = useRef(null);

  const DATA = [
    {
      image: Images.visa,
      title: "Visa Services",
      link: "visa",
    },
    {
      image: Images.ticket,
      title: "Air Ticket",
      link: "ticket",
    },
    {
      image: Images.house,
      title: "Properties",
      link: "appartment",
    },
    {
      image: Images.job,
      title: "Job Board",
      link: "job",
    },
    {
      image: Images.fair,
      title: "Blazing Fair",
      link: "fair",
    },
    {
      image: Images.success,
      title: "Success Story",
      link: "story",
    },
    {
      image: Images.referral,
      title: "Referral",
      link: "referral",
    },
    {
      image: Images.faq,
      title: "FAQ",
      link: "faq",
    },
    {
      image: Images.about,
      title: "About Blazing",
      link: "about",
    },
  ];

  const sliders = [
    {
      image: Images.Homebanner,
      title: "First Banner",
    },
    {
      image: Images.Homebanner,
      title: "Second Banner",
    },
    {
      image: Images.Homebanner,
      title: "Third Banner",
    },
  ];

  // Handle slider scroll and set active index
  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.floor(contentOffsetX / width);
    setActiveSlideIndex(index);
  };

  // Scroll to the specific index when a dot is clicked
  const handleDotPress = (index) => {
    setActiveSlideIndex(index);
    flatListRef.current.scrollToIndex({ animated: true, index: index });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* header: user information */}
      <View
        style={{
          backgroundColor: "#9D1F31",
          flexDirection: "row",
          alignItems: "center",
          paddingTop: 70,
          paddingBottom: 35,
          paddingHorizontal: 20,
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            width: "75%",
            overflow: "hidden",
          }}
        >
          {/* User Image */}
          <Image
            source={Images.user}
            style={{ height: 60, width: 60, borderRadius: 30 }}
          />
          <View>
            <Text
              style={{
                color: "white",
                fontSize: 14,
                fontFamily: "Montserrat_600SemiBold",
              }}
            >
              Mohammad Ashraf
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 12,
                fontFamily: "Montserrat_400Regular",
              }}
            >
              mohammadashraf@gmail.com
            </Text>
          </View>
        </View>

        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            backgroundColor: "white",
            height: 25,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 12,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            paddingHorizontal: 15,
          }}
          onPress={() => router.push("/wallet")}
        >
          <Text
            style={{
              color: "black",
              fontSize: 12,
              fontFamily: "Montserrat_600SemiBold",
            }}
          >
            Wallet
          </Text>
        </TouchableOpacity>
      </View>

      {/* Sliders here */}
      <View style={styles.sliderSection}>
        <FlatList
          ref={flatListRef} // Reference to FlatList
          data={sliders}
          renderItem={({ item }) => (
            <View style={styles.sliderContainer}>
              <Image
                source={item.image}
                resizeMode="contain"
                style={styles.image}
              />
            </View>
          )}
          horizontal
          pagingEnabled
          snapToAlignment="center"
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll} // Update the active index on scroll
          scrollEventThrottle={16} // Ensure smooth scroll tracking
        />

        {/* Pagination dots */}
        <View style={styles.dotContainer}>
          {sliders.map((_, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => handleDotPress(index)}
              >
                <View
                  style={[
                    styles.dot,
                    activeSlideIndex === index && styles.activeDot,
                  ]}
                />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      
      {/* Services here */}
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            marginTop: 30,
          }}
        >
          {DATA.map((data, index) => (
            <TouchableOpacity
              key={index}
              style={{
                width: "30%",
                marginBottom: 20,
                alignItems: "center",
                gap: 4,
              }}
              onPress={() => router.push(`${data?.link}`)}
            >
              <Image source={data.image} style={{ height: 48, width: 48 }} />
              <Text
                style={{
                  fontFamily: "Montserrat_600SemiBold",
                  fontSize: 12,
                  textAlign: "center",
                }}
              >
                {data.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <StatusBar style="light" />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  sliderSection: {
    position: "relative",
    padding: 5,
  },
  sliderContainer: {
    alignItems: "center",
  },
  image: {
    marginHorizontal: 5,
    borderRadius: 10,
    width: Dimensions.get("screen").width,
    height: 200,
  },
  dotContainer: {
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    bottom: -10,
    width: "100%",
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#ccc",
    margin: 5,
  },
  activeDot: {
    backgroundColor: "#9D1F31",
  },
});
