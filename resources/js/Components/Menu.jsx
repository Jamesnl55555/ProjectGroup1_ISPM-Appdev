import { IconAlignBoxBottomRightFilled, IconMenuDeep } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import Dropdown from "./Dropdown";

export default function Menu({ toggleMenu }) {
    const [opened, { open, close }] = useDisclosure(false);


    return (
        <div className="menu-icon" onClick={toggleMenu}>
            <Dropdown>
                <Dropdown.Trigger >
                    <IconMenuDeep size={18} />          
                </Dropdown.Trigger>
                <Dropdown.Content>
                    <Dropdown.Link href="/dashboard">Dashboard</Dropdown.Link>
                    <Dropdown.Link href="/products">Products</Dropdown.Link>
                    <Dropdown.Link href="/transactions">Transactions</Dropdown.Link>
                    <Dropdown.Link href="/reports">Reports</Dropdown.Link>
                    <Dropdown.Link href="/settings">Settings</Dropdown.Link>
                </Dropdown.Content>
            </Dropdown>
        </div>
    );
}