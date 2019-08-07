import { sign } from 'jsonwebtoken'
import Cookies from  'js-cookie'

export default async (req, res) => {
  console.log(Cookies.get('user'));
}
