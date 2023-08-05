import { View, Text, Image } from "react-native";
import { icons } from "../../../constants";
import styles from "./company.style";
import { checkiImageURL } from "../../../utils";

const Company = ({ companyLogo, jobTitle, companyName, country, city }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image
          source={{
            uri: checkiImageURL(companyLogo)
              ? companyLogo
              : "https://static.thenounproject.com/png/1551321-200.png",
          }}
          style={styles.logoImage}
        />
      </View>
      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
      </View>

      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>{companyName}/</Text>
        <View style={styles.locationBox}>
          <Image
            source={icons.location}
            resizeMode="contain"
            style={styles.locationImage}
          />
          <Text style={styles.locationName}>
            {country} ({city})
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Company;
