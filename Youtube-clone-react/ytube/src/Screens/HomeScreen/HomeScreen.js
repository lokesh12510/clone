import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CategoriesBar from "../../Components/CategoriesBar/CategoriesBar";
import Video from "../../Components/Video/Video";
import { useDispatch, useSelector } from "react-redux";
import {
  getPopularVideos,
  getVideosByCategory,
} from "../../redux/actions/videos.action";
import InfiniteScroll from "react-infinite-scroll-component";
import Skeleton from "react-loading-skeleton";

const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);

  const { videos, activeCategory, loading } = useSelector(
    (state) => state.homeVideos
  );

  const fetchData = () => {
    if (activeCategory === "All") dispatch(getPopularVideos());
    else dispatch(getVideosByCategory(activeCategory));
  };

  return (
    <Container>
      <CategoriesBar />
      <InfiniteScroll
        dataLength={videos.length}
        hasMore={true}
        next={fetchData}
        loader={
          <div className="spinner-border text-danger d-block mx-auto"></div>
        }
      >
        <Row>
          {!loading &&
            videos.map((video) => {
              return (
                <Col lg={3} md={4} key={video.id}>
                  <Video video={video} />
                </Col>
              );
            })}
          {loading && [
            ...Array(20).map(() => (
              <Col lg={3} md={4}>
                {" "}
                <Skeleton height={100} width="100%" />{" "}
              </Col>
            )),
          ]}
        </Row>
      </InfiniteScroll>
    </Container>
  );
};

export default HomeScreen;
