import HomeIcon from '@mui/icons-material/Home';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import PlaceIcon from '@mui/icons-material/Place';
import GroupsIcon from '@mui/icons-material/Groups';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';

// Mapa de componentes de iconos
export const iconMap = {
    Home: HomeIcon,
    SelfImprovement: SelfImprovementIcon,
    Place: PlaceIcon,
    Groups: GroupsIcon,
    Instagram: InstagramIcon,
    Mail: MailIcon,
};

// Función para transformar la data del JSON en objetos con componentes React
export const formatNavLinks = (navbarData) => {
    return navbarData.map((item) => ({
        label: item.label,
        href: item.path,
        IconComponent: iconMap[item.icon],
    }));
};