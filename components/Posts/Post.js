import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import styled from '@emotion/styled';

const PostContainer = styled.div(() => ({
  width: '300px',
  margin: '10px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  overflow: 'hidden',
}));

const CarouselContainer = styled.div(() => ({
  position: 'relative',
}));

const Carousel = styled.div(() => ({
  display: 'flex',
  overflowX: 'scroll',
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
  position: 'relative',
}));

const CarouselItem = styled.div(() => ({
  flex: '0 0 auto',
  scrollSnapAlign: 'start',
}));

const Image = styled.img(() => ({
  width: '280px',
  height: 'auto',
  maxHeight: '300px',
  padding: '10px',
}));

const Content = styled.div(() => ({
  padding: '10px',
  '& > h2': {
    marginBottom: '16px',
  },
}));

const Button = styled.button(({ isScrolling }) => ({
  position: 'absolute',
  bottom: 0,
  backgroundColor: 'rgba(255, 255, 255, 0.5)',
  border: 'none',
  color: '#000',
  fontSize: '20px',
  cursor: 'pointer',
  height: '50px',
  pointerEvents: isScrolling ? 'none' : 'auto',
}));

const PrevButton = styled(Button)`
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
`;

const NextButton = styled(Button)`
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
`;
const Initials = styled.div(() => ({
  padding: "10px",
  backgroundColor: "gray",
  cursor: "pointer",
  borderRadius: "30px",
  width: "25px",
  height: "25px",
  display: "flex",
  color: "white",
  fontWeight: "700",
}));

const UserInfo = styled.div(() => ({
  display: "flex",
  flexDirection: "column",
}));

const Username = styled.p(() => ({
  fontWeight: 700,
  fontSize: "20px",
}));

const Email = styled.p(() => ({
  fontWeight: 600,
  fontSize: "12px",
}));

const PostTitle = styled.p(() => ({
  padding: "5px",
  textAlign: "center",
  wordWrap: "break-word",
  wordBreak: "break-word",
  whiteSpace: "normal",
  width: "300px",
  fontWeight: "600",
}));

const Post = ({ posts }) => {
  const carouselRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);
  let fname = "Akshat";
  let lname = "Jaiswal";
  let email = "21052646@kiit.ac.in";

  const handleScrollComplete = () => {
    setIsScrolling(false);
  };

  const handleNextClick = () => {
    if (carouselRef.current && !isScrolling) {
      carouselRef.current.scrollBy({
        left: 310,
        behavior: 'smooth',
      });
      setIsScrolling(true);
      setTimeout(handleScrollComplete, 200);
    }
  };

  const handlePrevClick = () => {
    if (carouselRef.current && !isScrolling) {
      carouselRef.current.scrollBy({
        left: -310,
        behavior: 'smooth',
      });
      setIsScrolling(true);
      setTimeout(handleScrollComplete, 200);
    }
  };

  const handleImageError = (e) => {
    const fallbackUrl = e.target.alt;
    e.target.src = fallbackUrl;
  };

  return (
    <PostContainer>
      <CarouselContainer>
        <Carousel ref={carouselRef}>
          {posts.map((image, index) => {
            const thumbnailUrl = image.thumbnailUrl || 'https://b1370787.smushcdn.com/1370787/wp-content/uploads/2020/11/SE-5000H-RWS-3.jpg?lossy=1&strip=1&webp=1';
            return (
              <CarouselItem key={index}>
                <div style={{ display: "flex", gap: "5px", padding: "10px" }}>
                  <Initials>
                    {fname.split("")[0]} {lname.split("")[0]}
                  </Initials>
                  <UserInfo>
                    <Username>{fname} {lname}</Username>
                    <Email>{email}</Email>
                  </UserInfo>
                </div>
                <Image 
                  src={thumbnailUrl} 
                  alt='https://b1370787.smushcdn.com/1370787/wp-content/uploads/2020/11/SE-5000H-RWS-3.jpg?lossy=1&strip=1&webp=1' 
                  onError={handleImageError}
                />
                  <PostTitle>{image.title}</PostTitle>
               </CarouselItem>
            );
          })}
        </Carousel>
        <PrevButton onClick={handlePrevClick} isScrolling={isScrolling}>&#10094;</PrevButton>
        <NextButton onClick={handleNextClick} isScrolling={isScrolling}>&#10095;</NextButton>
      </CarouselContainer>
      <Content>
        {/* <h2>{posts.title}</h2>
        <p>{posts.body}</p> */}
      </Content>
    </PostContainer>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    content: PropTypes.any,
    images: PropTypes.shape({
      map: PropTypes.func,
    }),
    title: PropTypes.any,
  }),
};

export default Post;
