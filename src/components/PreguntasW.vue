<template>
    <div>
        {{ starWars }}
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'PreguntasW',
  computed: {
    ...mapState([
      'starWars',
    ]),
  },
};
</script>
