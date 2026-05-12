export default {

    props: ["photo"],

    emits: ["open"],

    template: `

        <section>

            <h2>
                {{ photo.title }}
            </h2>

            <p>

                <strong
                    v-if="photo.type === 'portrait'"
                >
                    Portrait photography
                </strong>

                <em
                    v-if="photo.type === 'landscape'"
                >
                    Landscape photography
                </em>

                {{ photo.description }}

            </p>

            <figure>

                <img
                    :src="photo.src"

                    :alt="photo.alt"

                    :title="photo.alt"

                    @click="$emit('open')"
                >

                <figcaption>
                    {{ photo.caption }}
                </figcaption>

            </figure>

            <dl>

                <dt>Style</dt>
                <dd>
                    {{ photo.style }}
                </dd>

                <dt>Lighting</dt>
                <dd>
                    {{ photo.lighting }}
                </dd>

                <dt>Price</dt>
                <dd>
                    {{ photo.price }}
                </dd>

            </dl>

        </section>
    `
}