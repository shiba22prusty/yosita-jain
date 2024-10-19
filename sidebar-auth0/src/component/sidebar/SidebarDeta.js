import HomeIcon from '@mui/icons-material/Home';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import InfoIcon from '@mui/icons-material/Info';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import ReviewsIcon from '@mui/icons-material/Reviews';

export const SidebarDeta = [
    {
        title:'Home',
        icon:<HomeIcon/>,
        path:"#home"

    },
    {
        title:'Services',
        icon:<MedicalServicesIcon/>,
        path:"#servises"

    },
    {
        title:'About',
        icon:<InfoIcon />,
        path:"#about"

    },
    {
        title:'Contact',
        icon:<ContactPhoneIcon/>,
        path:"#contact"

    },
    {
        title:'Feedback',
        icon:<ReviewsIcon/>,
        path:"#feedback"

    }
]