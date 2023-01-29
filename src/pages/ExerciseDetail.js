import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material'

import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const { id } = useParams(); //gives us the url id number for each exercise

  //recalling function whenever id changes
  //exercise and youtube api call
  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,
      exerciseOptions); //exerciseOption is the key that allows us to make the request
      setExerciseDetail(exerciseDetailData);
      //gives video link only for specific 
      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?q=$
      {exerciseDetailData.name}`, youtubeOptions);
      setExerciseVideos(exerciseVideosData)

    }

    fetchExercisesData();
  }, [id]);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercises />
    </Box>
  )
}

export default ExerciseDetail