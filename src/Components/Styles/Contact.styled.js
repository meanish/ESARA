import styled from "styled-components";


export const StyleContact = styled.div`
padding:1rem;
    text-align: center;
    h1{
        font-size:20px;
        margin-bottom:2rem;
    }
    .container {
      margin-top: 6rem;
      padding-bottom:2rem;
      border-bottom: 3px solid ${({ theme }) => theme.colors.black};
      .contact-form {
        max-width: 50rem;
        margin: auto;
        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;
            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  .map{
    margin-top:5rem;
  }
`