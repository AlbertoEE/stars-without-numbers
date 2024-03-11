import { useStoreDefinitionDataState } from "../../state"

export default function Shop() {
    
    const { equipmentDefinition } = useStoreDefinitionDataState()

    return (
        <div>
            <h1>Store</h1>
            <div>
                {equipmentDefinition.armors.map((item) => (
                    <div>
                        <div>{item.name}</div>
                        <div>{item.description}</div>    
                    </div>
                ))}
            </div>
        </div>
    )
}