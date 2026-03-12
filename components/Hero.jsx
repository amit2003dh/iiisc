import Image from 'next/image'
import { motion } from 'framer-motion'

import { Button } from './Button'
import { Container } from './Container'
import IIScLogo from '../assets/IIScLogo.png';
import MeityLogo from '../assets/Meity.png';
import ShaipLogo from '../assets/ShaipLogo.png';
import MagdapLogo from '../assets/Magdaplogo.png';
import GoogleLogo from '../assets/GoogleLogo.png';
import ArtparkLogo from "../assets/ARTPARK.png";
import NewronLogo from '../assets/newron-logo2x.png';
import BhasniLogo from '../assets/bhashini.png';
import Link from "next/link";

const GoogleComponent = () => {
    return (
        <>
            <span className={'md:-mt-5 text-xs font-thin text-slate-900 ml-16 md:ml-32'}>Supported by</span>
            <Image
                style={{width:"200px"}}
                src={GoogleLogo} alt="Google Logo" />
        </>
    );
};

const Logo =[
    {name:"",logo:IIScLogo, props: " w-24"},
    {name:"",logo:ArtparkLogo , props: "h-auto w-64"},
    {name:"Supported by",logo:GoogleLogo, props: "w-auto h-12 "},
    {name:" Support of",logo:BhasniLogo, props: "h-20 w-auto "}
]


const IiscComponent = () => {
    return <Link href={'https://www.iisc.ac.in/'}> <Image className="w-20 h-20 md:w-20 md:h-20-mt-2" src={IIScLogo} alt="IISc Logo" /></Link>;
};

const ArtparkComponent = () => {
    return <Link target='_blank' href={'https://www.artpark.in/language-data-ai'}><Image
        className={"h-auto w-64"} src={ArtparkLogo} alt="Artpark Logo" /></Link>
};
// const ArtparkComponent = () => {
//     return (
//         <a href="https://www.artpark.in/" target="_blank" rel="noreferrer">
//             <Image
//                 style={{width:"200px"}} className={"-mt-2"} src={ArtparkLogo} alt="Artpark Logo" />
//         </a>
//     );
// };

const BhasniComponent = () => {
    return (
        <>
            <span className={'-mt-5 text-xs font-thin text-slate-900'}>support of </span>
            <div className={"flex justify-end"}>
                <Image className="w-16 h-16 md:w-18 md:h-24 md:w-auto " src={BhasniLogo} alt="Bhasni Logo" />
            </div>
        </>
    )
};

export function Hero() {
    return (
        <section className="hero content-relative">
            {/* Gradient Blobs */}
            <div className="gradient-blob-1"></div>
            <div className="gradient-blob-2"></div>
            <div className="gradient-blob-3"></div>
            
            <motion.div 
                className="hero-left"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <motion.h1 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Capturing Language Diversity
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    The future of inclusive digital India — capturing every voice, dialect, and language across nation.
                </motion.p>
                <motion.button 
                    className="cta"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Explore Dataset
                </motion.button>
            </motion.div>

            <div className="hero-right">
                {/* Balance Card - Top Left */}
                <motion.div 
                    className="card-floating card-balance absolute top-0 left-0 mt-10 ml-10"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-fintech-primary rounded-full flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-xs text-gray-500">Total Balance</p>
                            <p className="text-lg font-bold text-gray-900">₹2,45,678</p>
                        </div>
                    </div>
                </motion.div>

                {/* Transaction Card - Top Right */}
                <motion.div 
                    className="card-floating card-transaction absolute top-0 right-0 mt-10 mr-10"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                >
                    <div className="flex items-center justify-between mb-3">
                        <p className="text-sm font-semibold text-gray-900">Recent Activity</p>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-xs font-medium text-gray-900">Voice Upload</p>
                                    <p className="text-xs text-gray-500">2 min ago</p>
                                </div>
                            </div>
                            <p className="text-sm font-semibold text-green-600">+₹450</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-xs font-medium text-gray-900">Data Processed</p>
                                    <p className="text-xs text-gray-500">5 min ago</p>
                                </div>
                            </div>
                            <p className="text-sm font-semibold text-purple-600">+1.2GB</p>
                        </div>
                    </div>
                </motion.div>

                {/* User Avatar Row - Bottom */}
                <motion.div 
                    className="card-floating card-users absolute bottom-0 left-0 mb-10 ml-10"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                >
                    <p className="text-sm font-semibold text-gray-900 mb-3">Active Contributors</p>
                    <div className="flex -space-x-2">
                        <div className="w-8 h-8 bg-fintech-primary rounded-full border-2 border-white flex items-center justify-center">
                            <span className="text-xs text-white font-medium">A</span>
                        </div>
                        <div className="w-8 h-8 bg-fintech-secondary rounded-full border-2 border-white flex items-center justify-center">
                            <span className="text-xs text-white font-medium">B</span>
                        </div>
                        <div className="w-8 h-8 bg-fintech-accent rounded-full border-2 border-white flex items-center justify-center">
                            <span className="text-xs text-white font-medium">C</span>
                        </div>
                        <div className="w-8 h-8 bg-gray-300 rounded-full border-2 border-white flex items-center justify-center">
                            <span className="text-xs text-gray-600 font-medium">+5</span>
                        </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">8 contributors online</p>
                </motion.div>

                {/* Main Phone Mockup */}
                <motion.div 
                    className="glass-card p-6 rounded-fintech floating phone-mockup absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    initial={{ opacity: 0, x: 100, y: 50 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <div className="mobile-dashboard">
                        {/* Balance Card */}
                        <div className="balance-card mb-6">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-wide">Total Balance</p>
                                    <p className="text-3xl font-bold text-gray-900">$1,558.00</p>
                                </div>
                                <div className="w-10 h-10 bg-fintech-primary rounded-full flex items-center justify-center">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                    </svg>
                                </div>
                            </div>
                            <div className="flex justify-between text-xs">
                                <div>
                                    <p className="text-gray-500">Income</p>
                                    <p className="text-green-600 font-semibold">+$3,250</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-gray-500">Expenses</p>
                                    <p className="text-red-600 font-semibold">-$1,692</p>
                                </div>
                            </div>
                        </div>

                        {/* Send Money Actions */}
                        <div className="actions mb-6">
                            <motion.button 
                                className="action-btn send-btn"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9 2zm0 0v-8" />
                                </svg>
                                Send
                            </motion.button>
                            <motion.button 
                                className="action-btn request-btn"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16" />
                                </svg>
                                Request
                            </motion.button>
                        </div>

                        {/* User Avatars */}
                        <div className="user-avatars mb-6">
                            <div className="flex justify-between items-center mb-3">
                                <p className="text-sm font-semibold text-gray-900">Quick Send</p>
                                <p className="text-xs text-fintech-primary">View all</p>
                            </div>
                            <div className="flex -space-x-3">
                                <motion.div 
                                    className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-2 border-white flex items-center justify-center"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <span className="text-xs text-white font-medium">A</span>
                                </motion.div>
                                <motion.div 
                                    className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full border-2 border-white flex items-center justify-center"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <span className="text-xs text-white font-medium">B</span>
                                </motion.div>
                                <motion.div 
                                    className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full border-2 border-white flex items-center justify-center"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <span className="text-xs text-white font-medium">C</span>
                                </motion.div>
                                <motion.div 
                                    className="w-10 h-10 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full border-2 border-white flex items-center justify-center"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <span className="text-xs text-white font-medium">D</span>
                                </motion.div>
                                <motion.div 
                                    className="w-10 h-10 bg-gray-200 rounded-full border-2 border-white flex items-center justify-center"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <span className="text-xs text-gray-600 font-medium">+5</span>
                                </motion.div>
                            </div>
                        </div>

                        {/* Transaction List */}
                        <div className="transactions-section">
                            <div className="flex justify-between items-center mb-4">
                                <p className="text-sm font-semibold text-gray-900">Recent Transactions</p>
                                <p className="text-xs text-fintech-primary">See all</p>
                            </div>
                            <ul className="transactions">
                                <motion.li 
                                    className="transaction-item"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                            <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                                            </svg>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm font-medium text-gray-900">+$200 USD</p>
                                            <p className="text-xs text-gray-500">from William</p>
                                        </div>
                                    </div>
                                    <div className="text-xs text-gray-400">
                                        2h ago
                                    </div>
                                </motion.li>
                                <motion.li 
                                    className="transaction-item"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                                            <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.403 2.008A2.5 2.5 0 0110.5 19H8a2 2 0 01-2-2v-6a2 2 0 012-2h4z" />
                                            </svg>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm font-medium text-gray-900">-$45 USD</p>
                                            <p className="text-xs text-gray-500">Coffee</p>
                                        </div>
                                    </div>
                                    <div className="text-xs text-gray-400">
                                        5h ago
                                    </div>
                                </motion.li>
                                <motion.li 
                                    className="transaction-item"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                            <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                                            </svg>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm font-medium text-gray-900">+$150 USD</p>
                                            <p className="text-xs text-gray-500">from Sarah</p>
                                        </div>
                                    </div>
                                    <div className="text-xs text-gray-400">
                                        1d ago
                                    </div>
                                </motion.li>
                                <motion.li 
                                    className="transaction-item"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                                            </svg>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm font-medium text-gray-900">+$85 USD</p>
                                            <p className="text-xs text-gray-500">Project Bonus</p>
                                        </div>
                                    </div>
                                    <div className="text-xs text-gray-400">
                                        2d ago
                                    </div>
                                </motion.li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
