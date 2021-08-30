import styled from 'styled-components'

export const ClientsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4rem;
  padding-bottom: 6rem;
  /* background: linear-gradient( 135deg, rgb(227, 28, 88) 0%, rgb(15, 29, 64) 100%); */
`

export const Title = styled.h3`
  font-family: "Open Sans Condensed";
  font-weight: 700;
  font-size: 2rem;
  color: #040404;
  margin-top: 0;
  margin-bottom: 2.5rem;

  span {
    color: #fcc200;
    font-weight: 700;
  }
`

export const Clients = styled.div`
  width: calc(100% - 100px);
  @media(min-width: 1300px) and (max-width: 1599px) { width: calc(100% - 400px) }
  @media(min-width: 1600px) { width: calc(100% - 600px) }
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: 1fr 1fr;
  gap: 1rem 2rem;

  div {
    text-align: center;

    img {
      text-align: center;
      filter: saturate(0);
      opacity: 0.8;
      transition: all 0.6s;
      max-width: 130px;

      :hover {
        filter: saturate(1);
        transform: scale(0.9, 0.9);
      }
    }
  }

  @media(min-width: 700px) {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: repeat(5, 1fr);
  }
`

