import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';

function Header() {
    return (
        <div className="header">

            <div className="header_left">

                <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweC
                IgeT0iMHB4IiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCI+CjxwYXRoIGZpbGw9IiMwMjg4RDEiIGQ9Ik00MiwzN
                2MwLDIuNzYyLTIuMjM4LDUtNSw1SDExYy0yLjc2MSwwLTUtMi4yMzgtNS01VjExYzAtMi43NjIsMi4yMzktNSw1LTVoMjZjMi43NjIsMCw1LDIu
                MjM4LDUsNVYzN3oiPjwvcGF0aD48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMTIgMTlIMTdWMzZIMTJ6TTE0LjQ4NSAxN2gtLjAyOEMxMi45NjUgMTc
                gMTIgMTUuODg4IDEyIDE0LjQ5OSAxMiAxMy4wOCAxMi45OTUgMTIgMTQuNTE0IDEyYzEuNTIxIDAgMi40NTggMS4wOCAyLjQ4NiAyLjQ5OUMxNy
                AxNS44ODcgMTYuMDM1IDE3IDE0LjQ4NSAxN3pNMzYgMzZoLTV2LTkuMDk5YzAtMi4xOTgtMS4yMjUtMy42OTgtMy4xOTItMy42OTgtMS41MDEgM
                C0yLjMxMyAxLjAxMi0yLjcwNyAxLjk5QzI0Ljk1NyAyNS41NDMgMjUgMjYuNTExIDI1IDI3djloLTVWMTloNXYyLjYxNkMyNS43MjEgMjAuNSAy
                Ni44NSAxOSAyOS43MzggMTljMy41NzggMCA2LjI2MSAyLjI1IDYuMjYxIDcuMjc0TDM2IDM2IDM2IDM2eiI+PC9wYXRoPgo8L3N2Zz4=" />

                <div className="header_search">
                    <SearchIcon />
                    <input type="text" />
                </div>

            </div>

            <div className="header_right">



            </div>

        </div>

    )
}

export default Header