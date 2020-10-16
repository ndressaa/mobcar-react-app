import styled from 'styled-components'

export const Content = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: var(--color-background);
`

export const Header = styled.header`
    display: flex;
    justify-content: center;
    width: 100vw;
    padding: 0.4rem 0;
    background: black;

    img {
        margin: 0.4rem 0;
    }
    
    @media(min-width: 800px) {
        img {
            transform: scale(1.25);
        }
    }
`

export const Main = styled.main`
    width: 686px;
    max-width: 90vw;
    height: 100%;
`

export const Title = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2rem 0;
    font-family: 'Helvetica';

    h1 {
        font-size: 30px;
        font-weight: 700;
    }

    button {
        background: black;
        color: white;
        border: none;
        border-radius: 10px; 
        font-size: 18px;
        padding: 0.7rem 1.4rem;
    }

    @media(max-width:800px) {
        h1 {
            font-size: 18px;
        }

        button {
            font-size: 12px;
        }
    }
`

export const Footer = styled.footer`
    display: flex;
    justify-content: center;
    color: var(--color-blue);
    font-family: 'Helvetica';
    font-weight: 400;
    font-size: 20px;
    width: 100vw;
    padding: 1.1rem 0;
    background: black;
`
