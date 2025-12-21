import styled from 'styled-components'

export const Section = styled.section`
    align-items: center;
    display: flex;
    min-height: 100vh;
`

export const SectionWrapper = styled.div`
    align-items: center;
    background-color: var(--cor-neutra-dark-medium);
    border-radius: var(--border-radius-m);
    display: flex;
    justify-content: center;
`

export const Container = styled.div`
    align-items: start;
    background-color: var(--cor-neutra-medium);
    border-radius: var(--border-radius-m) 0 0 var(--border-radius-m);
    color: var(--cor-neutra-light);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 400px;
    padding: var(--padding-l);
`

export const Title = styled.h1`
    color: var(--cor-neutra-light);
    font-size: var(--fonte-xxl);
    margin-bottom: 20px;
`

export const Description = styled.p`
    font-size: var(--fonte-md);
    margin-bottom: 30px;
`

export const Illustration = styled.img`
    margin-left: 50px;
    max-width: 500px;
`
