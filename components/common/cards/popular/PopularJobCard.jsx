import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./popularjobcard.style";
import { checkiImageURL } from "../../../../utils";
const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image
          source={{
            uri: checkiImageURL(item.employer_logo)
              ? item.employer_logo
              : "https://static.thenounproject.com/png/1551321-200.png",
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>
        {item.employer_name}
      </Text>

      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
          {item.job_title}
        </Text>
        <Text
          style={styles.location}
        >{`${item.job_country} (${item.job_city})`}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
