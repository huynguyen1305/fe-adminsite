/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from "react";
import { Button, Checkbox } from "antd";
import { LIST_MODULE } from "@/constants/list-module";
import { CheckboxChangeEvent } from "antd/es/checkbox";

const ModuleItem = ({ module, setRolePermissions, rolePermissions }: any) => {
  const methodTmp = useRef([]);
  console.log("modulzzzzzzzzzzzzzzze", methodTmp.current);

  const onChange = (
    e: CheckboxChangeEvent,
    moduleChoose: any,
    methodChoose: any
  ) => {
    console.log(e.target.checked, moduleChoose, methodChoose);

    if (e.target.checked) {
      const updatedData = rolePermissions.map((x: any) =>
        x.name === moduleChoose.name
          ? {
              ...moduleChoose,
              allowMethod: [...x.allowMethod, methodChoose],
            }
          : x
      );
      setRolePermissions(updatedData);
    } else {
      const updatedData = rolePermissions.map((x: any) =>
        x.name === moduleChoose.name
          ? {
              ...moduleChoose,
              allowMethod: x.allowMethod.filter(
                (item: any) => item !== methodChoose
              ),
            }
          : x
      );
      setRolePermissions(updatedData);
    }
  };
  return (
    <div key={module.name} className="my-4">
      <strong>{module.name}</strong>
      <div className="flex gap-6">
        {module.methods &&
          module.methods.map((method: any) => {
            return (
              <Checkbox
                key={method}
                onChange={(e) => {
                  onChange(e, module, method);
                }}
              >
                {method}
              </Checkbox>
            );
          })}
      </div>
    </div>
  );
};

const CreateRole = () => {
  const [roleName, setRoleName] = useState("");
  const [rolePermissions, setRolePermissions] = useState(LIST_MODULE);
  console.log(rolePermissions);
  return (
    <div>
      <strong>Create Role:</strong>
      <br />
      <br />
      <div>
        <strong>Role Name :</strong>
        <input
          type="text"
          placeholder="Role name"
          value={roleName}
          onChange={(e) => setRoleName(e.target.value)}
        />
      </div>
      <div className="flex mt-6">
        <div className="w-1/2">
          <div>
            <strong>Pick permissions:</strong>
            <br />

            <div>
              {LIST_MODULE &&
                LIST_MODULE.map((module) => {
                  return (
                    <ModuleItem
                      key={module.name}
                      module={module}
                      setRolePermissions={setRolePermissions}
                      rolePermissions={rolePermissions}
                    />
                  );
                })}
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <strong>Result</strong>
          <div>
            <strong>Role Name:</strong> {roleName}
            <br />
            <strong>Permissions:</strong>
            <div className="ml-4">
              {rolePermissions &&
                rolePermissions.map((module) => {
                  return (
                    <div className="my-2" key={module.name}>
                      <strong>{module.name}</strong>
                      <div className="flex gap-4">
                        {module.allowMethod &&
                          module.allowMethod.map((method) => {
                            return <div key={method}>{method}</div>;
                          })}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      <Button type="primary">Create</Button>
    </div>
  );
};

export default CreateRole;
