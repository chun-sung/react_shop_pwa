import styled from "styled-components";

function Pagination({ total, limit, page, setPage }) {
    
  const numPages = Math.ceil(total / limit);

    return (
    <>
      <Nav className="pagination mb-5">
        <Button className="btn btn-primary" onClick={() => setPage(page - 1)} disabled={page === 1}>
          &lt;
        </Button>

        {Array(numPages)
          .fill()
          .map((_, i) => (
            <Button className="btn" key={i + 1} onClick={() => setPage(i + 1)} aria-current={page === i + 1 ? "page" : null}>
              {i + 1}
            </Button>
          ))
        }
          
        <Button className="btn btn-primary"  onClick={() => setPage(page + 1) } disabled={page === numPages}>
          &gt;
        </Button>
      </Nav>
    </>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 16px;
`;

const Button = styled.button`
  border: none;
  border-radius: 15px;
  padding: 8px;
  margin: 0;
  background: #FFEBEB;
  color: black;
  font-size: 1rem;

  &:hover {
    background: tomato;
    cursor: pointer;
    transform: translateY(-1px);
  }

  &[disabled] {
    background: grey;
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    background: pink;
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;

export default Pagination;