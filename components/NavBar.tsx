import Image from 'next/image';
import Link from 'next/link';
import { Container, Group, Burger, Menu, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './styles/Navbar.module.css';

export function Navbar() {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Image src="/logo.png" width={55} height={55} alt="BriLive247" />
        <Group gap={12} visibleFrom="xs">
          <Text fw={500} c="#e619e6" component={Link} href="/">
            Home
          </Text>
          <Text fw={500} c="#e619e6" component={Link} href="/Music">
            Music
          </Text>
          <Text fw={500} c="#e619e6" component={Link} href="/Merch">
            Merch
          </Text>
          <Text fw={500} c="#e619e6" component={Link} href="/Visuals">
            Visuals
          </Text>
          <Text fw={500} c="#e619e6" component={Link} href="/Booking">
            Booking
          </Text>
        </Group>

        <Menu>
          <Menu.Target>
            <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item>
              <Text fw={500} c="#e619e6" component={Link} href="/">
                Home
              </Text>
            </Menu.Item>
            <Menu.Item>
              <Text fw={500} c="#e619e6" component={Link} href="/Music">
                Music
              </Text>
            </Menu.Item>
            <Menu.Item>
              <Text fw={500} c="#e619e6" component={Link} href="/Merch">
                Merch
              </Text>
            </Menu.Item>
            <Menu.Item>
              <Text fw={500} c="#e619e6" component={Link} href="/Visuals">
                Visuals
              </Text>
            </Menu.Item>
            <Menu.Item>
              <Text fw={500} c="#e619e6" component={Link} href="/Booking">
                Booking inquiries
              </Text>
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Container>
    </header>
  );
}
