import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./nearbyjobcard.style";
import { checkiImageURL } from "../../../../utils";
const NearbyJobCard = ({ job, handleNavigate }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{
            uri: checkiImageURL(job.employer_logo)
              ? job.employer_logo
              : "https://static.thenounproject.com/png/1551321-200.png",
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {job.job_title}
        </Text>
        <Text style={styles.jobType}>{`${job.job_employment_type}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NearbyJobCard;
