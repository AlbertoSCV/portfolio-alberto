const { default: Link } = require("next/link")

const NavLink = ({href, title}) => {
    return(
        <Link href={href} className="block py-2 pl-3 pr-4 text-gray-400 hover:text-white sm:text-lg rounded md:p-0">
            {title}
        </Link>
    )
}

export default NavLink;