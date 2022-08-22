import { IconButton } from "@material-tailwind/react"

function Header() {
    return (
        <header className="sticky top-0 z-50 flex items-center px-4 py-3 shadow-md bg-white">
            
            <IconButton
            variant="gradient"
            color="blue"
            ripple={true}
            className="px-5"
            >
            <i className="material-icons">home</i>
            </IconButton>

            <div className="px-4">
            <IconButton
            variant="gradient"
            color="blue"
            ripple={true}
            >
            <i className="material-icons">add</i>
            </IconButton>
            </div>

            <h1 className="font-mono ml-2 text-gray-700 text-xl">Gestalt</h1>

            <div className="mx-5 md: flex flex-grow items-center px-5 py-2 bg-gray-100 font-mono text-gray-600 rounded-lg">
                <IconButton
                variant="text"
                ripple={true}
                color="gray"
                >
                <i className="material-icons">search</i>
                </IconButton>
                <input 
                type="text"
                placeholder="Search"
                className="flex-grow px-3 text-base bg-transparent outline-none"
                />
            </div>
            <img
            loading="lazy"
            className="hidden md:inline flex cursor-pointer h-12 w-12 rounded-full ml-2 object-cover"
            src="https://blenderartists.org/uploads/default/original/4X/f/7/f/f7fd2c11c1aa93de59873a0f9c600027a308ac2a.jpeg"
            alt="pfp"
            />

        </header>
    )
}

export default Header