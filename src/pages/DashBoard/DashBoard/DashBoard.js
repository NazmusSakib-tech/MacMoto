import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import { Button } from '@mui/material';
import MyOrders from '../MyOrders/MyOrders';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import AddProduct from '../AddProduct/AddProduct';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import ManageProducts from '../ManageProducts/ManageProducts';
import Review from '../Review/Review';
import Pay from '../Pay/Pay';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function DashBoard() {
    const { logOut, user } = useAuth();
    let { path, url } = useRouteMatch();
    const { admin } = useAuth()
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        DashBoard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    <Link to='/home'  style={{ textDecoration: 'none', color: "black", fontWeight: "bold" }}><Button color="inherit">Go Home</Button></Link>
                    <Divider />
                    <Divider sx={{marginBottom: 4}}/>

                    {!admin ?

                        <Box >
                            <Link to={`${url}`} style={{ textDecoration: 'none', color: "black", fontWeight: "bold" }}><Button color="inherit">My Orders</Button></Link>
                            <Divider />

                            <Link to={`${url}/review`} style={{ textDecoration: 'none', color: "black", fontWeight: "bold" }}><Button color="inherit">Review</Button></Link>
                            <br />
                            <Divider />
                            <Link to={`${url}/pay`} style={{ textDecoration: 'none', color: "black", fontWeight: "bold" }}><Button color="inherit">Pay</Button></Link>
                            <br />
                            

                        </Box>


                        : <Box>
                            <Link to={`${url}/makeAdmin`} style={{ textDecoration: 'none', color: "black", fontWeight: "bold" }}><Button color="inherit">Make Admin</Button></Link>
                            <br />
                            <Divider />
                            <Link to={`${url}`} style={{ textDecoration: 'none', color: "black", fontWeight: "bold" }}><Button color="inherit">Manage All Orders</Button></Link>
                            <br />
                            <Divider />
                            <Link to={`${url}/addProduct`} style={{ textDecoration: 'none', color: "black", fontWeight: "bold" }}><Button color="inherit">Add Product</Button></Link>
                            <br />
                            <Divider />
                            <Link to={`${url}/manageProducts`} style={{ textDecoration: 'none', color: "black", fontWeight: "bold" }}><Button color="inherit">Manage Products</Button></Link>

                        </Box>
                    }
                </List>
                <Divider />
                <List>
                    {user?.email && <Button variant="contained" onClick={logOut}>Logout</Button>}
                </List>
            </Drawer>
            <Main open={open} sx={{padding:0}}>
                <DrawerHeader />
                <Box
                    component="main"
                    sx={{ padding: 0, margin: 0 }}
                >
                    {/* <Toolbar /> */}

                    {admin ? <Switch>
                        {/* <Route exact path={`${path}/myOrders`}>
                            <MyOrders></MyOrders>
                        </Route> */}

                        <Route exact path={`${path}`}>
                            <ManageAllOrders></ManageAllOrders>
                        </Route>
                        <Route path={`${path}/makeAdmin`}>
                            <MakeAdmin></MakeAdmin>
                        </Route>
                        <Route path={`${path}/addProduct`}>
                            <AddProduct></AddProduct>
                        </Route>
                        <Route path={`${path}/manageProducts`}>
                            <ManageProducts></ManageProducts>
                        </Route>
                    </Switch> :

                        <Switch>
                            <Route exact path={`${path}`}>
                                <MyOrders></MyOrders>
                            </Route>
                            <Route  path={`${path}/review`}>
                                <Review></Review>
                            </Route>
                            <Route  path={`${path}/pay`}>
                                <Pay></Pay>
                            </Route>
                        </Switch>
                    }


                </Box>
                {/* <Typography paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                    ]
                </Typography>
                <Typography paragraph>
                    Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
                    eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
                    ]
                </Typography> */}
            </Main>


        </Box>
    );
}
