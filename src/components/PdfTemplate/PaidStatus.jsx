import { Image, View } from "@react-pdf/renderer"
import paidImage from '../../assets/paid.png'
import unpaidImage from '../../assets/unpaid.jpg'
import styles from "./styles"

const PaidStatus = ({status}) => {
  return (
    <View style={styles.paidImageContainer}>
        {
            status ? <Image style={styles.paidImage} src={paidImage} /> : 
            <Image style={styles.paidImage} src={unpaidImage} />
        }
    </View>
  )
}
export default PaidStatus