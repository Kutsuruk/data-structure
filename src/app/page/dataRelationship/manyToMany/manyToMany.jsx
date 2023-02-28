import React from "react";
import { CodeBlock, dracula } from "react-code-blocks";
import { overloadExampleAfter, overloadExampleBefore } from "./examples";
import Title from "../../../components/common/typografy/title";
import Text from "../../../components/common/typografy/text";
import SmallTitle from "../../../components/common/typografy/smallTitle";
import Subtitle from "../../../components/common/typografy/subtitle";
const ManyToManyPage = () => {
    return (
        <>
            <Title>Many-to-Many</Title>
            <Text>Многие ко многим или Two-way-references</Text>
            <SmallTitle>Зачем</SmallTitle>
            <Text>- Увеличение производительности</Text>
            <Text>- Жизненно необходимые данные</Text>

            <Subtitle>Пример 1. Книги и теги</Subtitle>
            <SmallTitle>Логика</SmallTitle>
            <Text>
                - В каждом теге храним ссылки на все книги, содержащие тег.
            </Text>
            <Text>- В каждой книге храним ссылки на все её теги.</Text>
            <br />
            <CodeBlock
                text={overloadExampleBefore}
                language="js"
                theme={dracula}
                wrapLines={true}
            />
            <Subtitle>Пример 2. Книги и теги. Overload</Subtitle>
            <Text>
                Overload - перегрузка, сверхнагрузка. В данном случае имеется
                ввиду хранение большого количества даннных в параметре
                определенного экземпляра сущности.
            </Text>

            <SmallTitle>Условие</SmallTitle>
            <Text>- Для каждого тега сучествует &gt;1000 пособий</Text>
            <br />
            <CodeBlock
                text={overloadExampleAfter}
                language="js"
                theme={dracula}
                wrapLines={true}
            />
        </>
    );
};

export default ManyToManyPage;
