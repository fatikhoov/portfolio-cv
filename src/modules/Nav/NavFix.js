import { Link } from 'react-router-dom'
import './NavFix.css'

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined'
import ImportantDevicesOutlinedIcon from '@mui/icons-material/ImportantDevicesOutlined'
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined'
import NextWeekOutlinedIcon from '@mui/icons-material/NextWeekOutlined'

export default function NavFix() {
  return (
    <>
      <nav className="navfix_wrapper">
        <ul>
          <li>
            <Link to="/">
              <HomeOutlinedIcon />
            </Link>
          </li>
          <li>
            <Link to="/price">
              <SummarizeOutlinedIcon />
            </Link>
          </li>
          {/*  <li>
            <HashLink to="/#team">
              <ImportantDevicesOutlinedIcon />
            </HashLink>
          </li>
          <li>
            <HashLink to="/#team">
              <NextWeekOutlinedIcon />
            </HashLink>
          </li>
          <li>
            <HashLink to="/#team">
              <ContactSupportOutlinedIcon />
            </HashLink>
          </li> */}
        </ul>
      </nav>
    </>
  )
}
