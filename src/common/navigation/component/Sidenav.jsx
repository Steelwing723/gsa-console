import React from 'react';
import styles from "./Sidenav.module.scss";
import { LogOut, Truck, UserPlus, BarChart, ShoppingCart, DollarSign } from 'react-feather';
import { Link } from 'react-router-dom';
import classNames from 'classnames';


export function Sidenav() {
    const user = JSON.parse(window.localStorage.getItem('user'));
    var manager;
    if(user !== null) {
        manager = user.manager;
    }
    return (
        <div className={styles.Sidenav}>
            <div className={styles.Logo} style={{backgroundImage: "url(/img/gsa_logo.png)"}}></div>
            <div className={styles.Separator}></div>
            {/*replace the http local host with the link to*/}
            {/*Transaction page*/}
            <div className={styles.SidenavBtn} onClick={()=>alert("Functionality has not yet been implemented")}>
                <ShoppingCart className={classNames(styles.Icon, styles.noHover)}/>
                <div className={classNames(styles.SidenavBtnText, styles.noHover)}>Start Transaction</div>
            </div>
            <Link to="/productListing" className={styles.SidenavBtn}>
                <Truck className={classNames(styles.Icon, styles.noHover)}/>
                <div className={classNames(styles.SidenavBtnText, styles.noHover)}>View Products</div>
            </Link>
            { manager ?
                <Link to="/employeeDetails" className={styles.SidenavBtn}>
                    <UserPlus className={classNames(styles.Icon, styles.noHover)}/>
                    <div className={classNames(styles.SidenavBtnText, styles.noHover)}>Create Employee</div>
                </Link>
                : ""
            }
            { manager ?
            //Sales report
                <div className={styles.SidenavBtn} onClick={()=>alert("Functionality has not yet been implemented")}>
                    <DollarSign className={classNames(styles.Icon, styles.noHover)}/>
                    <div className={classNames(styles.SidenavBtnText, styles.noHover)}>Sales Report</div>
                </div>
                : ""
            }
            { manager ?
            //cashier report
                <div className={styles.SidenavBtn} onClick={()=>alert("Functionality has not yet been implemented")}>
                    <BarChart className={classNames(styles.Icon, styles.noHover)}/>
                    <div className={classNames(styles.SidenavBtnText, styles.noHover)}>Cashier Report</div>
                </div>
                : ""
            }
            <div className={styles.footer}>
                <div className={styles.Separator}></div>
                <a className={styles.SignOutBtn} onClick={() => {
                        window.localStorage.removeItem('user');
                        window.location = "/";
                    }}>
                    <div className={styles.SignOutBtnText}>
                        Sign Out<LogOut className={classNames(styles.IconExit, styles.noHover)}/>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Sidenav;