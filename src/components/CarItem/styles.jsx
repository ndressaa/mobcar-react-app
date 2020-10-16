import styled from 'styled-components'

export const Item = styled.div`
    border-top: 1px solid var(--color-grey);
    padding: 1.3rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        width: 100px;
        border-radius: 16px;        
    }

    button {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 1;
        border: none;
        background: none;
    }    

    button > img {
        width: 0.4rem;
    }
`

export const Info = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 1rem;
    font-family: 'Helvetica';

    h2 {
        font-weight: 700;
        font-size: 1rem;
    }

    h3 {
        color: var(--color-grey);
        font-size: 1rem;
        font-weight: 400;
    }

    p {
        color: var(--color-blue);
        font-size: 0.8rem;
    }

    h2, h3, p {
        padding: 0.2rem 0;
    }
`