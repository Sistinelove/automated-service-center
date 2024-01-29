import Link from "next/link";
import HomeIcon from '@mui/icons-material/Home';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import DomainVerificationIcon from '@mui/icons-material/DomainVerification';

export const Menu = [
    {
        name: "Home",
        path: '/',
        icon:  <HomeIcon />
    },
    {
        name: "Accounting",
        path: '/',
        icon:  <ManageAccountsIcon />
    },
    {
        name: "Application",
        path: '/',
        icon:  <DomainVerificationIcon />
    }
]